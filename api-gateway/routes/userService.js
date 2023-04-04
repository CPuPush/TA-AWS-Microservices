const express = require('express');
const router = express.Router();
const authentication = require('../middleware/authentication');

const authorizationPasien = require('../middleware/authorizationPasien');
const authorizationDokter = require('../middleware/authorizationDokter');
const authorizationAdmin = require('../middleware/authorizationAdmin');

const pasienController = require('./handler/userService/pasien');
const dokterController = require('./handler/userService/dokter');
const adminController = require('./handler/userService/admin');

// ! PASIEN
router.post('/pasien/register', pasienController.register);
router.post('/pasien/login', pasienController.login);
router.get('/pasien', authentication, authorizationPasien, pasienController.getPasienById);
router.post('/pasien/logout', authentication, pasienController.logout);



// ! DOKTER
router.post('/dokter/register', dokterController.register);
router.post('/dokter/login', dokterController.login);
router.get('/dokter', authentication, authorizationDokter, dokterController.getDokterById);
router.post('/dokter', dokterController.getAllDokter);
router.post('/dokter/logout', authentication, dokterController.logout);

// ! ADMIN
router.post('/admin/login', adminController.login);
router.post('/admin/validation', authentication, adminController.dokterValidation);
router.post('/admin/dokter', adminController.destroyDokter);
router.post('/admin/logout', authentication, adminController.logout);


module.exports = router;
