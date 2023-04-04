const register = require('./register');
const login = require('./login');
const getPasienById = require('./getPasienById');
const logout = require('./logout');
const giveAuth = require('./giveAuth');
const deleteAuth = require('./deleteAuth');

module.exports = {
  register,
  login,
  getPasienById,
  logout,
  giveAuth,
  deleteAuth
};