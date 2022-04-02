import React from 'react'
import flowerImg from "../../img/flower.jpg"
import blogImg from "../../img/blog.png"
import shortnerImg from "../../img/shortner.png"
import cloneImg from "../../img/uber.png"

const Data = [
    {
        id:"01",
        title: "CRUD blog",
        img: blogImg,
        desc: "Blog website with firebase authentication. Aside from reading the posts, login users can create new posts, edit and delete their own posts if they like.",
        url: "https://fascinating-griffin-747977.netlify.app/",
        github: "https://github.com/minami-k/blog.git"

    },
    {
        id:"02",
        title: "URL shortner",
        img: shortnerImg,
        desc: "An app which makes long URLs shorter. I created this with shrtcode API and made functionalities with React hooks.",
        url: "https://animated-gaufre-fb1f52.netlify.app/",
        github: "https://github.com/minami-k/linkshorten.git"

    },
    {
        id:"03",
        title: "Uber Clone",
        img: cloneImg,
        desc: "Cloned the official site of Uber with the help of SASS. This is the first website I cloned when I just started coding and I recreate it, using SASS instead of vanilla CSS.",
        url: "https://frabjous-raindrop-89a56d.netlify.app/",
        github: "https://github.com/minami-k/clonesite.git"

    }
]

export default Data