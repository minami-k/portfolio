import { faSquareRootVariable } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Router } from 'react-router-dom'
import logImg from "../../img/logImg.png"
import shortnerImg from "../../img/shortner.png"
import cloneImg from "../../img/uber.png"

const Data = [
    {
        id:"01",
        title: "Coffee Log App",
        img: logImg,
        desc: "A memo for those who brew coffee. The taste of coffee changes, depending on its origin and how you brew it. This app keeps all your recipe in one place so you won't forget the perfect ratio.",
        url: "https://candid-cupcake-4a32cd.netlify.app/",
        github: "https://github.com/minami-k/coffee-log-app.git",
        language: "HTML, CSS, Material UI, React, React Router, React hooks, Firebase, Algolia" 

    },
    {
        id:"02",
        title: "URL Shortner",
        img: shortnerImg,
        desc: "An app which makes long URLs shorter. I created this with shrtcode API and made functionalities with React hooks.",
        url: "https://animated-gaufre-fb1f52.netlify.app/",
        github: "https://github.com/minami-k/linkshorten.git",
        language: "HTML, CSS, shrtcodeAPI, Bulma "

    },
    {
        id:"03",
        title: "Uber Clone",
        img: cloneImg,
        desc: "Cloned the official site of Uber with the help of SASS. This is the first website I cloned when I just started coding. For this project, I recreated it with SASS instead of CSS.",
        url: "https://frabjous-raindrop-89a56d.netlify.app/",
        github: "https://github.com/minami-k/clonesite.git",
        language: "HTML, SASS"

    }
]

export default Data