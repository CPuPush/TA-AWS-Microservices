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
    await queryInterface.addConstraint('tb_pemeriksaan_lainnyas', {
      type: 'foreign key',
      name: "PEMERIKSAAN LAINNYA_ID",
      fields: ['tbMedicalRecordId'],
      references: {
        table: 'tb_medical_records',
        field: 'id'
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_pemeriksaan_lainnyas');
  }
};