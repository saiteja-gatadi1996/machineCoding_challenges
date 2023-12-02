import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <nav className='nav-center'>
        <Link to='/'>
          <img src={logo} className='logo' alt='logo' />
        </Link>
      </nav>
      <ul className='nav-links'>
        <li>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
