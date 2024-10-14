const express = require("express");
const path = require('path');
const app = express();
const Mustache = require('mustache');
const port = 3000;
const {mainViewTempObj} = require('./client/_headerTop/mainTempView.js');
const  {mainViewTemplate} = require('./client/_headerTop/index.js');
const {footerHash} = require('./client/_footerNav/hashFooter.js');
const {footerNavHtml} =  require('./client/_footerNav/templateFooter.js');


let menuDataTemplate =  "";

 

let menuDataView = {name:'home', m_class:'Abc' };
                    
   
   
// let someData = {                
//   {{#menuDataView}}    
//     {{name}}
//     {{m_class}}
//   {{\menuDataView}};
// } 
app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engine', 'js');


app.use((req, res, next) => {
  let header_all = Mustache.render( mainViewTemplate, mainViewTempObj);
   res.send(header_all);
   console.log("01"); 
   next(); 
},);

// Mustache.parse();
// app.use((req, res, next) => {
//   let footer_all = Mustache.render( footerNavHtml, footerHash); 
//    res.send(footer_all);
//    console.log("02");  
//    next();
// },);


app.listen(port, function(err) {
if (err) console.log("Error in server setup");
console.log("Server listening on Port", port);
});