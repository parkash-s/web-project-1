const mustacheExpress = require('mustache-express');

let _headerTemplate = fetch("../client/_header").then((res)=>res.text).then((template)=>{
    console.log(template);
})

const _header_data = {
    mobile:"+91-8854263156",
    email:"xyz@anymail.com"
}

// const output = mustacheExpress.render(_headerTemplate, _header_data);

// exports.output;