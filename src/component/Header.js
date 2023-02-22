import React from 'react';
// react-router-dom
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <div className='header__brand'>
          <img alt='logo' src='/logo.png' />
          <div>호사로운</div>
        </div>
      </Link>
      <div>
        <img alt='menu' src='/icon/hamburger.png' />
      </div>
    </header>
  );
}
export default Header;
