import React from 'react';

function Header() {
  return (
    <header className='header'>
      <div>
        <img alt='logo' src='/logo.png' />
        <div>호사로운</div>
      </div>
      <div>
        <img alt='menu' src='/icon/hamburger.png' />
      </div>
    </header>
  );
}
export default Header;
