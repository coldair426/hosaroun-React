import React, { useEffect } from 'react';

function Home({ navBoxTr, setNavBoxTr }) {
  useEffect(() => {
    setNavBoxTr('navbox__ending');
  }, [setNavBoxTr]);
  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 최상단으로 스크롤링
  }, []);
  return (
    <main
      className='home'
      onClick={() => {
        navBoxTr === '' && setNavBoxTr('navbox__ending');
      }}>
      <div>
        <img className='home__img-horizontal' src='/img/view/view-horizontal-2.jpg' alt='view-horizontal-2' />
        <img className='home__img-vertical' src='/img/living-room/living-room-vertical-4.jpg' alt='living-room-vertical-4' />
      </div>
      <div>
        <img className='home__img-vertical' src='/img/main-room/main-room-vertical-6.jpg' alt='main-room-vertical-6' />
        <img className='home__img-horizontal' src='/img/living-room/living-room-horizontal-2.jpg' alt='living-room-horizontal-2' />
      </div>
      <div>
        <img className='home__img-horizontal' src='/img/main-room/main-room-horizontal-5.jpg' alt='main-room-horizontal-5' />
        <img className='home__img-vertical' src='/img/passage/passage-vertical-6.jpg' alt='passage-vertical-6' />
      </div>
    </main>
  );
}
export default Home;
