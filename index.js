'use strict';

const {start, app} = require('./src/server');
require('dotenv').config();

const { db } = require('./src/models');
db.sync()
.then(() => {
  start();
  console.log('Connected to database: basic-api-app');
})
.catch(err => console.error(err));

