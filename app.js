const express = require("express");
const app = express();
const Mustache = require('mustache');
const port = 3000;
const output = require('./client/_headerTop/');
// const homePageBlocks =  {
//     Header: outputHeader,
//     Body: outputBody,
//     Footer: outputFooter
// }


// {{homePageBlocks.Header}}
// {{homePageBlocks.Body}}
// {{homePageBlocks.Footer}}

  
app.get('/', (req, res) => {
    res.send('hello...')
  })


app.listen(port, function(err) {
if (err) console.log("Error in server setup");
console.log("Server listening on Port", port);
});