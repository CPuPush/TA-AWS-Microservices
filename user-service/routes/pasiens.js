const express = require('express');
const router = express.Router();
const pasienController = require('./handler/pasien');

router.post('/register', pasienController.register);
router.post('/login', pasienController.login);
router.get('/:id',  pasienController.getUserById);
router.get('/', pasienController.getAllPasien);
router.post('/logout', pasienController.logout);

// give auth to dokter
router.post('/access-to-dokter/:pasienId', pasienController.giveAuth);
router.delete('/delete-access-to-dokter/:pasienId', pasienController.deleteAuth);
module.exports = router;
