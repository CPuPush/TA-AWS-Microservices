'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_pemeriksaan_lainnyas', {
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
      jantung: {
        type: Sequelize.STRING
      },
      paru: {
        type: Sequelize.STRING
      },
      ekg: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('tb_pemeriksaan_lainnyas');
  }
};