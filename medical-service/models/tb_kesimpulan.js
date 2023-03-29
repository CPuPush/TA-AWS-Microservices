'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_kesimpulan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.tb_medical_record);
    }
  }
  tb_kesimpulan.init({
    tbMedicalRecordId: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    kesimpulan: {
      type: DataTypes.TEXT
    },
    anjuran: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'tb_kesimpulan',
  });
  return tb_kesimpulan;
};