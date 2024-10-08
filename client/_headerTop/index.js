const express = require("express");
const app = express();
const Mustache = require('mustache');
const port = 3000;
const {textTemp} = require('./data/topLogoView');
const  {templateFile} = require('./header');

const output = null;
app.use('/', (req, res) => {
    const output = Mustache.render(templateFile, textTemp);
});
  
module.exports  = {output};