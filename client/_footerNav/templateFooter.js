const Mustache = require('mustache');

const footerNavHtml = `<footer>
        <div>
            <p>&copy; {{copyright}}</p>
            <nav>
                <ul>
                     {{#topMenu}}
                    <li><a href="#" style="color: white; text-decoration: none;">{{menu}}</a></li>
                    {{/topMenu}}
                </ul>
            </nav>
        </div>
    </footer>`
    
module.exports = footerNavHtml;