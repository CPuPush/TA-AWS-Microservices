const {refresh_pasien_token} = require('../../../models');

module.exports = async (req, res) => {
  try {
    const refresh_token = req.query.refresh_token;
    const token = await refresh_pasien_token.findOne({
      where: {
        token: refresh_token
      }
    });
    console.log("test1");
    if(!token){
      return res.status(400).json({
        status: "error",
        message: "invalid token"
      });
    }
    console.log("test2");
    return res.status(200).json({
      status: 'success',
      token
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};