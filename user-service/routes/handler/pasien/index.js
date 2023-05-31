const register = require('./register');
const login = require('./login');
const getUserById = require('./getPasienById');
const logout = require('./logout');
const getAllPasien = require('./getAllPasien');
const giveAuth = require('./giveAuth');
const deleteAuth = require('./deleteAuth');
const getAllDokterAuth = require('./getAllDokterAuth');

module.exports = {
  register,
  login,
  getUserById,
  logout,
  getAllPasien,
  giveAuth,
  deleteAuth,
  getAllDokterAuth
};