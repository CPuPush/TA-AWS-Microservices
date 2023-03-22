const express = require('express');
const router = express.Router();
const adminTokenController = require('./handler/refresh-token-admin');
const dokterTokenController = require('./handler/refresh-token-dokter');
const pasienTokenController = require('./handler/refresh-token-pasien');

router.post('/admin', adminTokenController.create);
router.get('/admin', adminTokenController.getToken);

router.post('/dokter', dokterTokenController.create);
router.get('/dokter', dokterTokenController.getToken);

router.post('/pasien', pasienTokenController.create)
router.get('/pasien', pasienTokenController.getToken)
module.exports = router;