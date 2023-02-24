import { React } from 'react';
// react-router-dom
import { Link } from 'react-router-dom';

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
          <Link to='/overview'>Overview</Link>
        </div>
        <div>
          <Link to='/photograph'>Photograph </Link>
        </div>
        <div>
          <Link to='/location'>Location </Link>
        </div>
        <div>
          <Link to='/booknow'>Book now </Link>
        </div>
        <div>
          <Link to='/contactus'>Contact us </Link>
        </div>
      </nav>
    </header>
  );
}

export default PcHeader;
