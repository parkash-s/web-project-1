const express = require("express");
const app = express();
const Mustache = require('mustache');
const port = 3000;
const {textTemp} = require('./client/_headerTop/data/topLogoView');
const  {templateFile} = require('./client/_headerTop/header.mustache');

app.use((req, res, next) => {
  let header_all = Mustache.render(templateFile, textTemp); 
   res.send(header_all);
   console.log("01");
   
},



);

// const homePageBlocks =  {
//     Header: outputHeader,
//     Body: outputBody,
//     Footer: outputFooter
// }


// {{homePageBlocks.Header}}
// {{homePageBlocks.Body}}
// {{homePageBlocks.Footer}}


  
// app.get('/', (req, res) => {
//     res.send('hello...')
//   })


app.listen(port, function(err) {
if (err) console.log("Error in server setup");
console.log("Server listening on Port", port);
});