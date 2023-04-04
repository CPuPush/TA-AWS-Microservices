'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dokter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.refresh_dokter_token);
      this.hasMany(models.tb_give_auth);
    }
  }
  dokter.init({
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jenis_kelamin: {
      type: DataTypes.ENUM,
      values:['perempuan','laki-laki'],
      allowNull: false
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    no_str: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true
    },
    role: {
      type: DataTypes.ENUM,
      values: ['dokter', 'pasien', 'admin'],
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['menunggu', 'disetujui', 'ditolak'],
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'dokter',
  });
  return dokter;
};