import React from 'react';
// react-router-dom
import { Link } from 'react-router-dom';

function NavBox() {
  return (
    <nav className='navbox'>
      <button>
        <img src='./icon/x_square_icon.png' alt='close' />
      </button>
      <Link className='navbox__link' to={'/overview'}>
        <div>Overview</div>
      </Link>
      <Link className='navbox__link' to={'/rooms'}>
        <div>Rooms</div>
      </Link>
      <Link className='navbox__link' to={'/location'}>
        <div>Location</div>
      </Link>
      <Link className='navbox__link' to={'/booknow'}>
        <div>Book now</div>
      </Link>
      <Link className='navbox__link' to={'/contactus'}>
        <div>Contact us</div>
      </Link>
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
