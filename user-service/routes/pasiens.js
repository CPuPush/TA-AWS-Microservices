const express = require('express');
const router = express.Router();
const pasienController = require('./handler/pasien');

router.post('/register', pasienController.register);
router.post('/login', pasienController.login);
router.get('/:id',  pasienController.getUserById);
router.get('/', pasienController.getAllPasien);
router.post('/logout', pasienController.logout);

module.exports = router;
