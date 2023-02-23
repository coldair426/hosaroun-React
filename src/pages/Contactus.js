import React, { useEffect } from 'react';

function Contactus({ navBoxTr, setNavBoxTr }) {
  useEffect(() => {
    setNavBoxTr('navbox__ending');
  }, []);
  return (
    <main
      className='contactus'
      onClick={() => {
        navBoxTr === '' && setNavBoxTr('navbox__ending');
      }}>
      <div className='contactus__contents'>
        <img className='contactus__img' src='./contactusPage/contactus.jpg' alt='contactusimage' />
        <div className='contactus__contact'>
          <div>
            <div className='contact__item'>
              <a href='tel:010-8790-0835'>
                <div className='contact__tiltle'>전화번호</div>
                <div className='contact__value'>
                  010-8790-0835 <span className='contact__value-link-impact'>(클릭)</span>
                </div>
              </a>
            </div>
            <div className='contact__item'>
              <a href='https://open.kakao.com/me/hosaroun'>
                <div className='contact__tiltle'>카카오톡</div>
                <div className='contact__value contact__value-link-impact'>바로가기</div>
              </a>
            </div>
          </div>
          <div>
            <div className='contact__item'>
              <a href='https://www.instagram.com/hosaroun/'>
                <div className='contact__tiltle'>인스타그램</div>
                <div className='contact__value contact__value-link-impact'>바로가기</div>
              </a>
            </div>
            <div className='contact__item'>
              <a href='https://www.airbnb.co.kr/rooms/717697795659629052?check_in=2023-01-16&check_out=2023-01-22&guests=1&adults=1&s=67&unique_share_id=c1f07666-c142-4f7a-9637-b5b5d71c1078'>
                <div className='contact__tiltle'>에어비앤비</div>
                <div className='contact__value contact__value-link-impact'>바로가기</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contactus;
