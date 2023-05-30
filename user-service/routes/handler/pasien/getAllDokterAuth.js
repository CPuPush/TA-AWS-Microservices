const { dokter, tb_give_auth } = require("../../../models");

module.exports = async (req, res) => {
  try {
    const { pasienId } = req.body;
    const data = await dokter.findAll({
      include: {
        model: tb_give_auth,
      },
    });
    const dataDokter = await data.map(async (item) => {
      const dataRelasi = item.dataValues.tb_give_auths;
      if (dataRelasi.length) {
        const findPasien = await dataRelasi.find((itemRelasi) => {
          const dataAuth = itemRelasi.dataValues;
          if (dataAuth.pasienId == pasienId) {
            return itemRelasi;
          }
        });
        if (findPasien) {
          item.dataValues["akses"] = true;
        } else {
          item.dataValues["akses"] = false;
        }
        return item;
      } else {
        item.dataValues["akses"] = false;

        return item;
      }
    });
    return res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};
