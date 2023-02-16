'use strict'

const axios = require('axios');

const seedHuman = {
  wheels: 4,
  massKG: 1200,
  yearMade: 1996
}

axios.post('http://localhost:3001/vehicle', seedHuman);