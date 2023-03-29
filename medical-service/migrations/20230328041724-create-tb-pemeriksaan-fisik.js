'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_pemeriksaan_fisiks', {
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
      tinggi_badan: {
        type: Sequelize.REAL
      },
      berat_badan: {
        type: Sequelize.REAL
      },
      indeks_masa_tubuh: {
        type: Sequelize.REAL
      },
      kulit: {
        type: Sequelize.STRING
      },
      sistem_limfa: {
        type: Sequelize.STRING
      },
      thyroid: {
        type: Sequelize.STRING
      },
      denyut_nadi: {
        type: Sequelize.INTEGER
      },
      karakter: {
        type: Sequelize.STRING
      },
      vena: {
        type: Sequelize.STRING
      },
      oedema: {
        type: Sequelize.STRING
      },
      tekanan_darah: {
        type: Sequelize.STRING
      },
      detak_jantung: {
        type: Sequelize.STRING
      },
      mur_mur_jantung: {
        type: Sequelize.STRING
      },
      frekuensi_nafas: {
        type: Sequelize.INTEGER
      },
      trachea:{
        type: Sequelize.STRING
      },
      inspeksi:{
        type: Sequelize.STRING
      },
      palpasi: {
        type: Sequelize.STRING
      },
      auskultasi: {
        type: Sequelize.STRING
      },
      perkusi: {
        type: Sequelize.STRING
      },
      mulut: {
        type: Sequelize.STRING
      },
      hati: {
        type: Sequelize.STRING
      },
      limpa:{
        type: Sequelize.STRING
      },
      massa: {
        type: Sequelize.STRING
      },
      colok_dubur:{
        type: Sequelize.STRING
      },
      ginjal: {
        type: Sequelize.STRING
      },
      saraf_cranial: {
        type: Sequelize.STRING
      },
      sistem_motorik: {
        type: Sequelize.STRING
      },
      sistem_sensorik: {
        type: Sequelize.STRING
      },
      refleks: {
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
    await queryInterface.addConstraint('tb_pemeriksaan_fisiks', {
      type: 'foreign key',
      name: "PEMERIKSAAN_FISIK_ID",
      fields: ['tbMedicalRecordId'],
      references: {
        table: 'tb_medical_records',
        field: 'id'
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_pemeriksaan_fisiks');
  }
};