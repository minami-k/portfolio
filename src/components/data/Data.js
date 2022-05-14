import React from 'react'
import logImg from "../../img/logImg.png"
import shortnerImg from "../../img/shortner.png"
import dashboardImg from "../../img/dashboard.png"


const Data = [
    {
        id:"01",
        title: "My Personal Dashboard",
        img: dashboardImg,
        desc: "Personal dashboard I use daily. It has everything I need so now I don't need to switch screens to check each piece of information. The background photo changes for every refresh.",
        url: "https://musical-biscotti-efbbf3.netlify.app/",
        github: "https://github.com/minami-k/dashboard",
        language: "HTML, CSS, Tailwind CSS, JavaScript, React, React Hooks, Weather API, New York Times API" 

    },
    {
        id:"02",
        title: "Coffee Log App",
        img: logImg,
        desc: "A CRUD memo for those who brew coffee. The taste of coffee changes, depending on its origin and how you brew it. This app keeps all your recipe in one place so you won't forget the perfect ratio.",
        url: "https://candid-cupcake-4a32cd.netlify.app/",
        github: "https://github.com/minami-k/coffee-log-app.git",
        language: "HTML, CSS, Material UI, React, React Router, React hooks, Firebase, Algolia" 

    },
    {
        id:"03",
        title: "URL Shortner",
        img: shortnerImg,
        desc: "An app which makes long URLs shorter. I created this with shrtcode API and made functionalities with React hooks.",
        url: "https://animated-gaufre-fb1f52.netlify.app/",
        github: "https://github.com/minami-k/linkshorten.git",
        language: "HTML, CSS, shrtcodeAPI, Bulma "

    },
  
]

export default Data