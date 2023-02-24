import { React } from 'react';
// react-router-dom
import { Link, NavLink } from 'react-router-dom';

function PcNavBar({ pcNavBar }) {
  return (
    <div className={`PcNavBar ${pcNavBar}`}>
      <Link className='PcNavBar__logo' to='/'>
        <img src='./icon/hosaroun-logo.png' alt='logo' />
        <div>호사로운</div>
      </Link>
      <div className='PcNavBar__navigation'>
        <div>
          <NavLink to='/overview'>Overview</NavLink>
        </div>
        <div>
          <NavLink to='/photograph'>Photograph </NavLink>
        </div>
        <div>
          <NavLink to='/location'>Location </NavLink>
        </div>
        <div>
          <NavLink to='/booknow'>Book now </NavLink>
        </div>
        <div>
          <NavLink to='/contactus'>Contact us </NavLink>
        </div>
      </div>
      <div className='PcNavBar__sns'>
        <a href='https://open.kakao.com/me/hosaroun'>
          <img src='./icon/kakaotalk-logo.png' alt='kakaotalk' />
        </a>
        <a href='https://www.instagram.com/hosaroun/'>
          <img src='./icon/instagram-logo_black.png' alt='Instagram' />
        </a>
      </div>
    </div>
  );
}

export default PcNavBar;
