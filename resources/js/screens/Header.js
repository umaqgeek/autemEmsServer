import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <nav className='navbar navbar-expand-md navbar-light navbar-laravel fixed-top'>
    <div className='container'>
      <Link className='navbar-brand' to='/'>
        <img className='mr-4' src='images/Logo-AUTeM-Alumni-UTeM.png' style={{maxWidth: screen.width*0.15}} />
        AUTeM EMS
      </Link>
    </div>
  </nav>
)

export default Header
