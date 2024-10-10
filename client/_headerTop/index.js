const express = require("express");
const app = express();
const mustache = require('mustache');
const port = 3000;
// const {textTemp} = require('./data/topLogoView');
// const  {templateFile} = require('./header');

app.use((req, res, next)=>{
   let output = mustache.render(templateFile, textTemp); 
    console.log("02");
    next();
});

  
// module.exports  = {output};