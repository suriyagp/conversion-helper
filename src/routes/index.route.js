/* eslint-disable import/no-import-module-exports */
import express from 'express';
import conversionRoute from './conversion.route';

const router = express.Router();
router.use('/conversion', conversionRoute);

module.exports = router;
