import { createAndDownloadCsv } from '../service/conversion.service';
const jsonConverter = require('csvtojson');

export const csv2Json = (req, res) => {
  try {
    if (req.file === undefined) {
      return res.status(400).send({message: "Please upload a CSV file!", status: 1});
    }
   
    jsonConverter()
      .fromString(req.file.buffer.toString())
      .then((data)=>{ 
        res.status(200).send({
          status: 0,
          message: 'CSV to JSON converted successfully',
          data
        });
      })
  } catch (error) {
    res.status(500).send({
      status: 1,
      message: `Could not upload the file: ${  req.file.originalname}`
    });
  }
};

export const json2Csv = (req, res, next) => {
  const { data } = req.body;
  const { fileName } = req.query;
  
  try {
    const csvFile = createAndDownloadCsv(data);
  
    res.header('Content-Type', 'text/csv');
    res.attachment(fileName);
    res.status(200).send(csvFile)
    return next();
  } catch (error) {
    res.status(500).send({
      status: 1,
      message: `Could not download the file: ${  req.file.originalname}`
    });
  }
}