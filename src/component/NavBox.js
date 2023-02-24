import React from 'react';
// react-router-dom
import { Link, NavLink } from 'react-router-dom';

function NavBox({ navBoxTr, setNavBoxTr }) {
  return (
    <nav className={`navbox ${navBoxTr}`}>
      <button
        onClick={() => {
          setNavBoxTr('navbox__ending');
        }}>
        <img src='./icon/x_square_icon.png' alt='close' />
      </button>
      <NavLink className='navbox__link' to={'/overview'}>
        <div>Overview</div>
      </NavLink>
      <NavLink className='navbox__link' to={'/photograph'}>
        <div>Photograph</div>
      </NavLink>
      <NavLink className='navbox__link' to={'/location'}>
        <div>Location</div>
      </NavLink>
      <NavLink className='navbox__link' to={'/booknow'}>
        <div>Book now</div>
      </NavLink>
      <NavLink className='navbox__link' to={'/contactus'}>
        <div>Contact us</div>
      </NavLink>
      <div className='navbox__sns'>
        <a href='https://open.kakao.com/me/hosaroun'>
          <img src='./icon/kakaotalk-logo.png' alt='kakaotalk' />
          <div>Kakaotalk</div>
        </a>
        <a href='https://www.instagram.com/hosaroun/'>
          <img src='./icon/instagram-logo_black.png' alt='Instagram' />
          <div>Instagram</div>
        </a>
      </div>
    </nav>
  );
}

export default NavBox;
