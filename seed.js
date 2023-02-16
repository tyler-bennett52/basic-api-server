'use strict'

const axios = require('axios');

const seedHuman = {
  heightInches: 72,
  massKG: 120,
  eyeColor: 'brown'
};

const seedVehicle = {
  wheels: 4,
  massKG: 1200,
  yearMade: 1996
};

axios.post('http://localhost:3001/human', seedHuman);
axios.post('http://localhost:3001/human', seedHuman);
axios.post('http://localhost:3001/human', seedHuman);

axios.post('http://localhost:3001/vehicle', seedVehicle);
axios.post('http://localhost:3001/vehicle', seedVehicle);
axios.post('http://localhost:3001/vehicle', seedVehicle);


