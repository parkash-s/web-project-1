const express = require('express');
const mustache = require('mustache');

const mainViewTemplate = 
`<!DOCTYPE html>
<html lang="{{lang}}">
<head>
    <meta charset="{{charset}}"></meta>
    <meta content="{{metaContent}}" name="{{nameviewport}}"></meta>
    <meta content="{{contentDetails}}" name="{{nameDes}}"></meta>
    <meta content="{{contentService}}" name="{{nameKeywork}}"></meta>
    <title>{{title}}</title>
    <link href="css/style.css" rel="{{relName}}"></link>
</head>
<body>
    <main>
         <header id="headerComponent">
             <div id="dataGot"></div>
             <div class="header-top pageSize">
                 <a href="{{logoDetails.logolink}}" class="logo">
                     <img src="{{logoDetails.logoPathImage}}" alt="Website Logo"/>
                 </a>
                 <div class="contactNum second">
                     <a href="{{logoDetails.logolink}}" class="connectMobile">{{logoDetails.logoPathImage}}</a>
                     <a href="mailTo:">{{socialIconImage}}</a>
                 </div>
                 <div class="hamburger" id="hamburger">
                     <div></div>
                     <div></div>
                     <div></div>
                 </div>

                 <div class="social-icons">
                 {{#socialLink}}
                     <a href="{{link}}" aria-label="{{label}}">
                        <img src="{{image}}" alt="{{label}}">
                     </a>
                 {{/socialLink}}
                 </div>
                
             </div>
         </header>

        <nav class="menu" id="menu">
            <div class="pageSize">
                <div>
                    <ul class="menu-inner">
                        {{#topMenu.submenu0}}  
                                <li class='{{class}}'>
                                  <a href="#">{{menu}}</a>
                                  {{}}
                                    {{submenu}}
                                  {{}}
                                </li>
                        {{/topMenu.submenu0}}
                        
                    </ul>
                </div>
                <div class="contactNum">
                    <a href="" class="connectMobile">+91-9650536016</a>
                    <a href="mailTo:" class="connectMobile">example@example.com</a>
                </div>
            </div>
        </nav>

        <footer>
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
    </footer>


    </main>
</body>`

module.exports = {mainViewTemplate};
    


