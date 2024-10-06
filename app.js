const express = require('express');
const app = express();
const VIEWS_PATH = './client';
const mustacheExpress = require('mustache-express');
const path = require('path');
const { default: output } = require('./server');
// const _header = require('./client/header');
const port = 5000;
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('client', __dirname + '/public');
const _header = require('./client/header/');


app.get('/', (req, res, next) => {
    console.log("app is running");
    // console.log(_header);
    // res.sendFile(path.join(__dirname, "./hello.txt"));
    // res.send(path.join(__dirname + server, "index.js"));
});

app.listen(port, ()=>{
    console.log(`app is listening at http://localhost:${port}`);
})