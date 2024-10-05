const express = require('express');
const app = express();
const port = 8000;
const path = require('path');



app.get('/', (req, res, next) => {
    console.log("DWSADSsadsds");
  });
express.json()

app.listen(port, ()=>{
    console.log(`app is listening at http://localhost:8000`);
})