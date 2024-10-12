const path = require('path'); 
 
let mainViewTempObj =  { 
        "lang" : "en",
        "charset" : "UTF-8",
        "metaContent" : "width=device-width,initial-scale=1",
        "nameviewport":"viewport",
        "contentDetails":"Welcome to our website. We provide top-notch services in various domains. Learn more about us.",
        "nameDes":"description",
        "contentService":"services, about us, portfolio, contact, responsive web design",
        "nameKeywork":"keywords",
        "title" : "Learn Website Design | Learn Web Development | SEO | Other Specialized Courses" ,
        "relName" : "stylesheet" ,
        "logoDetails":{
            "logoPathImage": "img/logo.png",
            "logolink" : "company logo",
        },
        "socialLink" : [
                        {
                        "image":"img/fb.webp",
                        "link": "redirectLink1",
                        "label": "facebook"
                        },
                        { 
                            "image":"img/instagram.jpg",
                            "link": "redirectLink2",
                            "label": "twitter"
                        },
                
                        {
                        "image":"img/tw.webp",
                        "link": "redirectLink3",
                        "label": "instagram"
                        }
                   ],

        "topMenu" :   [
                            {
                                "menu": "home",
                                "submenu": false,
                                'class': null
                            },
                            {
                                "menu": "About",
                                "submenu": false,
                                'class': null
                            },
                            {  
                            "submenuItems":{ 
                                'menu' : 'courses',
                                'submenu':true, 
                                'class': 'menu-item',
                                "submenuItemsInner     " : [
                                            { "name": "web design" },
                                            { "name": "web development" },
                                            { "name": "Seo" },
                                            {"name":"others"}
                                        ],    
                                }
                               
                            },
                            
                            {
                                "menu": "Portfolio",
                                "submenu": false,
                                'class': null
                            },
                            {
                                "menu": "Contact",
                                "submenu": false,
                                'class': null
                            },
                    ], 
                            
                            
                           
    };
module.exports = {mainViewTempObj}