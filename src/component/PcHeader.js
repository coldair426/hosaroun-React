import { React } from 'react';
// react-router-dom
import { NavLink, Link } from 'react-router-dom';

function PcHeader() {
  return (
    <header className='pc-header'>
      <div className='pc-header__title'>
        <Link className='pc-header__logo' to='/'>
          <img src='./icon/hosaroun-logo.png' alt='logo' />
          <div>호사로운</div>
        </Link>
        <div className='pc-header__sns'>
          <a href='https://open.kakao.com/me/hosaroun'>
            <img src='./icon/kakaotalk-logo.png' alt='kakaotalk' />
            <div>Kakaotalk</div>
          </a>
          <a href='https://www.instagram.com/hosaroun/'>
            <img src='./icon/instagram-logo_black.png' alt='Instagram' />
            <div>Instagram</div>
          </a>
        </div>
      </div>
      <nav className='pc-header__navigation'>
        <div>
          <NavLink to='/overview' className={({ isActive }) => (isActive ? 'pc-active' : undefined)}>
            Overview
          </NavLink>
        </div>
        <div>
          <NavLink to='/photograph' className={({ isActive }) => (isActive ? 'pc-active' : undefined)}>
            Photograph{' '}
          </NavLink>
        </div>
        <div>
          <NavLink to='/location' className={({ isActive }) => (isActive ? 'pc-active' : undefined)}>
            Location{' '}
          </NavLink>
        </div>
        <div>
          <NavLink to='/booknow' className={({ isActive }) => (isActive ? 'pc-active' : undefined)}>
            Book now{' '}
          </NavLink>
        </div>
        <div>
          <NavLink to='/contactus' className={({ isActive }) => (isActive ? 'pc-active' : undefined)}>
            Contact us{' '}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default PcHeader;
