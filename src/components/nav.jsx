import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav class='navbar navbar-light'>
      <div className='navbar-brand d-none d-sm-block'>
        <img src='/images/flashcard-logo.png' alt='logo' />
      </div>
      <ul className='nav justify-content-center'>
        <li className='nav-item'>
          <NavLink
            className='nav-link'
            to='/'
            activeClassName='nav-active'
            exact
          >
            All cards
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className='nav-link'
            activeClassName='nav-active'
            to='/practice'
            exact
          >
            Practice
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className='nav-link'
            activeClassName='nav-active'
            to='/marked'
            exact
          >
            Marked
          </NavLink>
        </li>
      </ul>
      <div className='navbar-brand invisible d-none d-sm-block'>Navbar</div>
    </nav>
  );
};

export default Nav;
