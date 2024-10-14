const Mustache = require('mustache');
console.log("inside footer html!");
const footerNavHtml = `<ul>
                        {{#footerHash}}
                        <li><a href="#">{{menu}}</a></li>
                        {{/footerHash}}
                      </ul>`
            
    
module.exports = {footerNavHtml};