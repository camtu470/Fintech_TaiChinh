import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
   <nav>
    <div className="logo">
      <h2>FINTECH</h2>
    </div>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/">About</a></li>
      <li><a href="/">Services</a></li>
      <li><a href="/">Contact Us</a></li>
    </ul>
   </nav>
  )
}

export default Navbar
