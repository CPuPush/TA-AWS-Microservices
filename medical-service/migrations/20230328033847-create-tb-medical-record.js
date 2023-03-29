'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_medical_records', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false
      },
      jenis_kelamin: {
        type: Sequelize.ENUM,
        values:['perempuan','laki-laki'],
        allowNull: false
      },
      tanggal_lahir: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      umur: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      alamat: {
        type: Sequelize.STRING,
        allowNull: false
      },
      no_rekam_medis: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true
      },
      tgl_pemeriksaan: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      tujuan_pemeriksaan: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pasien_id: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    await queryInterface.dropTable('tb_medical_records');
  }
};