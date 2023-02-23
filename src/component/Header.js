import React from 'react';
// react-router-dom
import { Link } from 'react-router-dom';

function Header({ navBox, setNavBox }) {
  return (
    <header
      className='header'
      onClick={() => {
        navBox && setNavBox(false);
      }}>
      <Link to='/'>
        <div className='header__brand'>
          <img alt='logo' src='/logo.png' />
          <div>호사로운</div>
        </div>
      </Link>
      <div>
        <img
          onClick={() => {
            setNavBox(true);
          }}
          alt='menu'
          src='/icon/hamburger.png'
        />
      </div>
    </header>
  );
}
export default Header;
