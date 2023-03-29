'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_medical_record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.tb_laboratorium);
      this.hasMany(models.tb_anamnesa);
      this.hasMany(models.tb_pemeriksaan_fisik);
      this.hasMany(models.tb_pemeriksaan_lainnya);
      this.hasMany(models.tb_kesimpulan);
    }
  }
  tb_medical_record.init({
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jenis_kelamin: {
      type: DataTypes.ENUM,
      values:['perempuan','laki-laki'],
      allowNull: false
    },
    tanggal_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    umur: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    no_rekam_medis: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true
    },
    tgl_pemeriksaan: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tujuan_pemeriksaan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pasien_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'tb_medical_record',
  });
  return tb_medical_record;
};