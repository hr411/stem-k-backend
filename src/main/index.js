const express = require('express');
const router = express.Router();
const ctrl = require('./main.ctrl');

router.get('/telnumber', ctrl.telnumber);
router.get('/operatetime', ctrl.operatetime);
router.get('/signatureclinic', ctrl.signatureclinic);
router.get('/event', ctrl.event);
router.get('/terms', ctrl.terms);
router.get('/privatestate', ctrl.privatestate);
router.get('/siteinfo', ctrl.siteinfo);

module.exports = router;