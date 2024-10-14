const express =  require('express');
const path = require("path");
const Mustache = require('mustache');
console.log("inside from footer hash object!")
let footerHash = [
                    {
                        "menu": "home"
                    },
                    {
                        "menu": "About"
                    },
                    
                ]    

            

module.exports = {footerHash}