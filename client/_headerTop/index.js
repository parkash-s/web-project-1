const express = require("express");
const app = express();
const mustache = require('mustache');
const port = 3000;
const {textTemp} = require('./data/topLogoView');
const  {templateFile} = require('./header');

let output = null;
app.use('/', (req, res) => {
    output = mustache.render(templateFile, textTemp);
    res.send(output);
});
  
module.exports  = {output};