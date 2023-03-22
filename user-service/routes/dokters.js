const express = require('express');
const router = express.Router();
const dokterController = require('./handler/dokter');

router.post('/register', dokterController.register);
router.post('/login', dokterController.login);
router.get('/', dokterController.getAllDokter);
router.post('/logout', dokterController.logout);

module.exports = router;