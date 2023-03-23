const express = require('express');
const router = express.Router();
const authentication = require('../middleware/authentication');

const pasienController = require('./handler/userService/pasien');
const dokterController = require('./handler/userService/dokter');


// ! PASIEN
router.post('/pasien/register', pasienController.register);
router.post('/pasien/login', pasienController.login);
router.get('/pasien', authentication, pasienController.getPasienById);
router.post('/pasien/logout', authentication, pasienController.logout);

// ! DOKTER
router.post('/dokter/register', dokterController.register);
router.post('/dokter/login', dokterController.login);
router.post('/dokter', dokterController.getAllDokter);
router.post('/dokter/logout', authentication, dokterController.logout);




module.exports = router;
