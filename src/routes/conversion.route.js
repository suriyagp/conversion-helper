import express from 'express';
import { csv2Json, json2Csv } from '../controller/conversion.controller';
import csvFileUpload from '../middleware/csvFileUpload';

const router = express.Router();

router.post('/csv2Json', csvFileUpload.single("file"), csv2Json);
router.post('/json2Csv', json2Csv);

export default router;