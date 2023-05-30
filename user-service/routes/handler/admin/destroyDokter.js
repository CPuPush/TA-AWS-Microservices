const { dokter, refresh_dokter_token } = require("../../../models");
const validation = require("fastest-validator");
const v = new validation();

module.exports = async (req, res) => {
  try {
    const schema = {
      id: "number|empty:false",
    };
    const validate = v.validate(req.body, schema);

    if (validate.length) {
      return res.status(400).json({
        status: "error",
        message: validate,
      });
    }

    const { id } = req.body;
    const data = await dokter.findByPk(id);
    if (!data) {
      return res.status(404).json({
        status: "error",
        message: "dokter not found",
      });
    }
    await refresh_dokter_token.destroy({
      where: {
        dokterId: id,
      },
    });
    await dokter.destroy({
      where: {
        id,
      },
    });

    return res.json({
      status: "success",
      message: "dokter successfully deleted",
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};
