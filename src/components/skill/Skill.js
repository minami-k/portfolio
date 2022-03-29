import React from 'react'
import "./skill.css"

const Skill = () => {
  return (
    <div className='has-text-centered '>
      <h2 className='is-size-3 my-5'>My skill</h2>
      <ul className='is-flex is-flex-wrap-wrap is-justify-content-center skill '>
        <li className='py-2 px-4 has-background-dark has-text-white-bis'>HTML</li>
        <li className='py-2 px-4 has-background-dark has-text-white-bis'>CSS</li>
        <li className='py-2 px-4 has-background-dark has-text-white-bis'>JavaScript</li>
        <li className='py-2 px-4 has-background-dark has-text-white-bis'>React.js</li>
        <li className='py-2 px-4 has-background-dark has-text-white-bis'>WordPress</li>
        <li className='py-2 px-4 has-background-dark has-text-white-bis'>GitHub</li>
        <li className='py-2 px-4 has-background-dark has-text-white-bis'>Firebase</li>

      </ul>
    </div>
  )
}

export default Skill