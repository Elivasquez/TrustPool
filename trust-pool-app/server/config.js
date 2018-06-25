// this file will define variables for the server to use from the proccess enviroment
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 8080,
  PUBLIC_PATH: path.resolve(__dirname, '../dist/trust-pool-app'),
};