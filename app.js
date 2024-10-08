const express = require("express");
const app = express();
const Mustache = require('mustache');
const port = 3000;
const output = require('./client/_headerTop/');
// const homePageBlocks =  {
//     Header: output,
//     Body: outputBody,
//     Footer: outputFooter
// }


// {{homePageBlocks.Header}}
// {{homePageBlocks.Body}}
// {{homePageBlocks.Footer}}
app.get('/client/_headerTop/',(re1,res)=>{

})
  
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});