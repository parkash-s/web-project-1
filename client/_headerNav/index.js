const templateNavTop = 
`<nav class="menu" id="menu">
        <div class="pageSize">
            <div>
                <ul>
                <#topMenu>
                <li><a href="#">{{menu}}</a></li>
                </topMenu>
                </ul>
            </div>
            <div class="contactNum">
                <a href="" class="connectMobile">+91-9650536016</a>
                <a href="mailTo:" class="connectMobile">example@example.com</a>
            </div>
        </div>
    </nav>`;

    module.exports = {templateNavTop};