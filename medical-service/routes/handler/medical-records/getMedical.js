const {
  tb_medical_record, 
  tb_anamnesa,
  tb_pemeriksaan_fisik, 
  tb_laboratorium,
  tb_pemeriksaan_lainnya, 
  tb_kesimpulan
} = require('../../../models');

module.exports = async (req, res) => {
  try {
    const {tbMedicalRecordId} = req.params;

    const data = await tb_medical_record.findAll({
      include: [
        {
          model: tb_anamnesa,
        },
        {
          model: tb_pemeriksaan_fisik,
        },
        {
          model: tb_laboratorium,
        },
        {
          model: tb_pemeriksaan_lainnya,
        },
        {
          model: tb_kesimpulan,
        }
      ],
      where: {
        id: tbMedicalRecordId
      }
    },
    )

    return res.status(200).json({
      status: "success",
      data
    })
  } catch (error) {
    return res.status(500).json(error);
  }
};

