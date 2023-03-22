'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dokters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      jenis_kelamin: {
        type: Sequelize.ENUM,
        values:['perempuan','laki-laki'],
        allowNull: false
      },
      alamat: {
        type: Sequelize.STRING,
        allowNull: true
      },
      no_str: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      role: {
        type: Sequelize.ENUM,
        values: ['dokter', 'pasien', 'admin'],
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM,
        values: ['menunggu', 'disetujui', 'ditolak'],
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      password: {
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
    await queryInterface.dropTable('dokters');
  }
};