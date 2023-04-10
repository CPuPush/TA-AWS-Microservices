const login = require('./login');
const destroyDokter = require('./destroyDokter');
const dokterValidation = require('./validationDokter');
const logout = require('./logout');
const getAdminById = require('./getAdminById');

module.exports = {
  login,
  destroyDokter,
  dokterValidation,
  logout,
  getAdminById
};