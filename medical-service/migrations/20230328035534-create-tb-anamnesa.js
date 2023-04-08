'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_anamnesas', {
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
      riwayat_penyakit_dahulu: {
        type: Sequelize.STRING,
      },
      riwayat_penyakit_keluarga: {
        type: Sequelize.STRING,
      },
      riwayat_kecelakaan: {
        type: Sequelize.STRING,
      },
      riwayat_perawatan_rumah_sakit: {
        type: Sequelize.STRING,
      },
      riwayat_operasi: {
        type: Sequelize.STRING,
      },
      merokok:{
        type: Sequelize.STRING,
      },
      minum_alkohol: {
        type: Sequelize.STRING,
      },
      olahraga: {
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
    await queryInterface.dropTable('tb_anamnesas');
  }
};