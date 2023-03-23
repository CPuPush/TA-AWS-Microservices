const login = require('./login');
const logout = require('./logout');
const dokterValidation = require('./validationDokter');
const destroyDokter = require('./destroyDokter');

module.exports = {
  login,
  logout,
  dokterValidation,
  destroyDokter
}