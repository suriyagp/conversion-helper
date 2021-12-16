/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
const config = require('config');
const bodyParser = require('body-parser');
const Logger = require('./utils/app-logger');
const log = new Logger('app');
const routes = require('./routes/index.route');
const app = express();
app.get('/healthcheck', (req, res) => {
  res.status(200).send('ok');
});

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use('/api', routes);

app.listen(config.port, () => {
  log.info(`Express HTTP server listening on port ${config.port}`);
  log.debug(`Express HTTP server listening on port ${config.port}`);
});
