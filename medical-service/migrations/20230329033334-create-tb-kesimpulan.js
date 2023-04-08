'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_kesimpulans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tbMedicalRecordId: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        references: {
          model: "tb_medical_records",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      kesimpulan: {
        type: Sequelize.TEXT
      },
      anjuran: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_kesimpulans');
  }
};