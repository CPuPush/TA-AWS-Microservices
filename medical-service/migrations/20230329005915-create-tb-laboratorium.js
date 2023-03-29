'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_laboratoria', {
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
      hb: {
        type: Sequelize.REAL
      },
      leukosit: {
        type: Sequelize.REAL
      },
      led: {
        type: Sequelize.REAL
      },
      eritrosit: {
        type: Sequelize.REAL
      },
      hematrokit: {
        type: Sequelize.REAL
      },
      trombosit: {
        type: Sequelize.REAL
      },
      golongan_darah: {
        type: Sequelize.ENUM,
        values: ['A', 'AB', 'B', 'O', 'A+', 'AB+', 'B+', 'O+','A-', 'AB-', 'B-', 'O-']
      },
      mcv: {
        type: Sequelize.REAL
      },
      mch:{
        type: Sequelize.REAL
      },
      mchc: {
        type: Sequelize.REAL
      },
      basofil: {
        type: Sequelize.REAL
      },
      eosinofil:{
        type: Sequelize.REAL
      },
      n_batang:{
        type: Sequelize.REAL
      },
      n_segmen: {
        type: Sequelize.REAL
      },
      limfosit: {
        type: Sequelize.REAL
      },
      monosit: {
        type: Sequelize.REAL
      },
      gula_darah_puasa: {
        type: Sequelize.REAL
      },
      total_kolesterol: {
        type: Sequelize.REAL
      },
      hdl:{
        type: Sequelize.REAL
      },
      ldl:{
        type: Sequelize.REAL
      },
      trigliserida:{
        type: Sequelize.REAL
      },
      ureum_darah: {
        type: Sequelize.REAL
      },
      kreatinin_darah: {
        type: Sequelize.REAL
      },
      asam_urat: {
        type: Sequelize.REAL
      },
      sgot: {
        type: Sequelize.REAL
      },
      sgpt: {
        type: Sequelize.REAL
      },
      warna: {
        type: Sequelize.STRING
      },
      kekeruhan:{
        type: Sequelize.STRING
      },
      berat_jenis: {
        type: Sequelize.REAL
      },
      ph: {
        type: Sequelize.REAL
      },
      leukosit_urine: {
        type: Sequelize.STRING
      },
      eritrosit: {
        type: Sequelize.STRING
      },
      silinder: {
        type: Sequelize.STRING
      },
      kristal: {
        type: Sequelize.STRING
      },
      epitel:{
        type: Sequelize.STRING
      },
      protein: {
        type: Sequelize.STRING
      },
      glukosa: { 
        type: Sequelize.STRING
      },
      bilirubin: {
        type: Sequelize.STRING
      },
      urobilin: {
        type: Sequelize.STRING
      },
      benda_keton: {
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
    await queryInterface.addConstraint('tb_laboratoria', {
      type: 'foreign key',
      name: "LABORATORIUM_ID",
      fields: ['tbMedicalRecordId'],
      references: {
        table: 'tb_medical_records',
        field: 'id'
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_laboratoria');
  }
};