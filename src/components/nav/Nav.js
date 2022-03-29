import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <navbar>
      <ul className='is-flex-tablet is-justify-content-center '>
        <li className='navbar-item'><a className='has-text-danger'>about me</a></li>
        <li className='navbar-item'><a className='has-text-danger'>skill</a></li>
        <li className='navbar-item'><a className='has-text-danger'>works</a></li>
        <li className='navbar-item'><a className='has-text-danger'>contact</a></li>
        </ul>
    </navbar>


</>
  )
}

export default Nav