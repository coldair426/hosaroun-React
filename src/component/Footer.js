import React from 'react';

function Footer({ navBox, setNavBox }) {
  return (
    <footer
      className='footer'
      onClick={() => {
        navBox && setNavBox(false);
      }}>
      <div className='footer__contents'>
        <div>호사로운</div>
        <div>주소: 강원 춘천시 동면 순환대로 1154-48</div>
        <div>
          번호: <a href='tel:010-8790-0835'>010-8790-0835</a>
        </div>
        <div>
          <a href='https://open.kakao.com/me/hosaroun'>
            <img className='footer__sns-logo' src='/icon/kakaotalk-logo.png' alt='kakaotalk' />
            <span>Kakaotalk</span>
          </a>
          <a href='https://www.instagram.com/hosaroun/'>
            <img className='footer__sns-logo' src='/icon/instagram-logo_black.png' alt='Instagram' />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
