import React from 'react'
import "./navbar.css"
import logo from "../img/Logo- 1.png"
import explore from "../img/Explore.png"


const Navbar = () => {
  return (
      <div className='nav'>
          <div>
              <img src={logo} alt="logo" />
              <img className="nav_logo" src={explore} alt="logo-text" />
          </div>
          <div className='nav_links'>
              <a className='nav_items' href="#">Home</a>
              <a className='nav_items' href="#">Tours</a>
              <a className='nav_items' href="#">Hotel</a>
              <a className='nav_items' href="#">Gallery</a>
              <a className='nav_items' href="#">Pages</a>
              <a className='nav_items' href="#">Blog</a>
              <a className='nav_items' href="#">Contact</a>
              <a className='nav_items' href="#">Login</a>
          </div>
          <button className='btn_sg'>Sign UP</button>
    </div>
  )
}

export default Navbar