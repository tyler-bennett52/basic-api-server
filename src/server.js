'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
require('dotenv').config();
const PORT = process.env.PORT || 3003;

app.use(logger);

app.get('/', (req, res) => {
  res.status(200).send('Speak friend and enter');
});

app.get('/person', validator, (req, res, next) => {
  let name = req.query.name;
  if (req.query.name) {
    res.status(200).json({ name });
  } else {
    next();
  }
});

app.use(notFoundHandler);
app.use(errorHandler);

const start = () => {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
};


module.exports = {start, app};
