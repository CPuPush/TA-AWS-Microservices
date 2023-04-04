const express = require('express');
const router = express.Router();
const dokterController = require('./handler/dokter');

router.post('/register', dokterController.register);
router.post('/login', dokterController.login);
router.post('/', dokterController.getAllDokter);
router.get('/:id', dokterController.getDokterById);
router.post('/logout', dokterController.logout);

router.get('/pasienAuth/:dokterId', dokterController.getPasienWithGivenAuth);

module.exports = router;