const path = require('path');

let mainViewTempObj = {
    "lang": "en",
    "charset": "UTF-8",
    "metaContent": "width=device-width,initial-scale=1",
    "nameviewport": "viewport",
    "contentDetails": "Welcome to our website. We provide top-notch services in various domains. Learn more about us.",
    "nameDes": "description",
    "contentService": "services, about us, portfolio, contact, responsive web design",
    "nameKeywork": "keywords",
    "title": "Learn Website Design | Learn Web Development | SEO | Other Specialized Courses",
    "relName": "stylesheet",
    "logoDetails": {
        "logoPathImage": "img/logo.png",
        "logolink": "company logo"
    },
    "socialLink": [
        {
            "image": "img/fb.webp",
            "link": "redirectLink1",
            "label": "facebook"
        },
        {
            "image": "img/instagram.jpg",
            "link": "redirectLink2",
            "label": "twitter"
        },
        {
            "image": "img/tw.webp",
            "link": "redirectLink3",
            "label": "instagram"
        }
    ],
    "topMenu": [
        {
            "menu": "home",
            "submenu": null,
            "class": null
        },
        {
            "menu": "Portfolio",
            "submenu": null,
            "class": null
        },
        {
            "isTrue":   {
                        "menu": "courses",
                        "submenu": ['A','B','C'],
                        "class": "menu-item"
                        }
        },
        {
            "menu": "About",
            "submenu": null,
            "class": null
        },
        {
            "menu": "Contact",
            "submenu": null,
            "class": null
        }
    ]
};

module.exports = { mainViewTempObj };