const express = require('express');
const mustache = require('mustache');

const templateFile = `
<!doctypehtml>
<html lang="{{lang}}">
<meta charset="{{charset}}">
<meta content="{{metaContent}}" name="{{nameviewport}}">
<meta content="{{contentDetails}}" name="{{nameDes}}">
<meta content="{{contentService}}" name="{{nameKeywork}}">
<title>{{title}}</title>
// <link href="__dirname__+public+./css/style.css" rel="{{relName}}">
</head>
<body>
<main>
    <header id="headerComponent">
        <div id="dataGot"></div>
        <div class="header-top pageSize">
            <a href="{{logoPath.link}}" class="logo">
                <img src="{{logoPath.image}}" alt="Website Logo">
            </a>
            <div class="contactNum second">
                <a href="{{socialIconImage.link}}" class="connectMobile">{{socialIconImage}}</a>
                <a href="mailTo:">{{socialIconImage}}</a>
            </div>
            <div class="hamburger" id="hamburger">
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div class="social-icons">
            {{#socialIconImage}}
                <a href="socialIconImage.link" aria-label="{{socialIconImage.lable}}"><img src="socialIconImage.image" alt="Facebook"></a>
           {{/socialIconImage}}
            </div>
            
        </div>
    </header>`

    module.exports = {templateFile};
    


