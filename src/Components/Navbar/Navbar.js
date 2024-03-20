import React from 'react'
import './Navbar.css'


export const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Rolls Royce</h1>
        <nav className='nav'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <button className='btn'>Contact</button>
            </ul>
        </nav>
    </div>
  )
}
