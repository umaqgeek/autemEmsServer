import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className='navbar navbar-expand-md navbar-light navbar-laravel fixed-bottom'>
    <div className='container'>
      <Link className='navbar-brand' to='/'>
        <button type='button' className='btn btn-primary'>Events</button>
      </Link>
      <Link className='navbar-brand' to='/joblist'>
        <button type='button' className='btn btn-success'>Jobs</button>
      </Link>
      <Link className='navbar-brand' to='/alumnilist'>
        <button type='button' className='btn btn-dark'>Alumnis</button>
      </Link>
      <Link className='navbar-brand' to='/loginpage'>
        <button type='button' className='btn btn-secondary'>Login</button>
      </Link>
    </div>
  </nav>
)

export default Header
