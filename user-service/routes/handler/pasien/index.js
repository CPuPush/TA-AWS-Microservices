const register = require('./register');
const login = require('./login');
const getUserById = require('./getPasienById');
const logout = require('./logout');
const getAllPasien = require('./getAllPasien');

module.exports = {
  register,
  login,
  getUserById,
  logout,
  getAllPasien
};