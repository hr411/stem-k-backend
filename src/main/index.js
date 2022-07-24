const express = require('express');
const router = express.Router();
const crtl = require('./main.ctrl');

router.get('/telnumber', crtl.telnumber);
router.get('/operatetime', crtl.operatetime);

module.exports = router;