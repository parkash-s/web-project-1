const express = require("express");
const app = express();
const mustache = require('mustache');
const port = 3000;
const {textTemp} = require('./data/topLogoView');
const  {templateFile} = require('./header');

async function getHeader(){
    let output = null;
     await app.use((req, res, next) => {
       output = mustache.render(templateFile, textTemp); 
    });
    return output;
}

  
module.exports  = {output};