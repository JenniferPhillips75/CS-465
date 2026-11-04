const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/trvl');

router.get('/travel', ctrl.travel);

module.exports = router;