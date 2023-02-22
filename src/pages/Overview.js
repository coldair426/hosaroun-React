import React from 'react';

function Overview() {
  return (
    <main className='overview'>
      <div className='overview__sentence'>
        <span className='overview__sentence-impact'>야경 명소</span> 구봉산에 자리한
        <br />
        저택 호사로운 입니다.
      </div>
      <img className='overview__image' src='./img/living-room/living-room-horizontal-1.jpg' alt='living-room-horizontal-1' />
      <div className='overview__sentence'>
        넓은 마당과 캠핑장까지
        <br />
        단독으로 이용하실 수 있어요.
      </div>
      <div className='overview__image-wrapper'>
        <img className='overview__image-vertical' src='./img/view/view-vertical-2.jpg' alt='view-vertical-2' />
        <img className='overview__image-horizontal' src='./img/view/view-horizontal-1.jpg' alt='view-horizontal-1' />
      </div>
      <div className='overview__image-sentence-wrapper'>
        <div className='overview__sentence-horizontal'>
          불멍을 위한 장작도
          <br />
          준비해드릴게요.
        </div>
        <img className='overview__image-vertical2' src='./img/tent/tent-vertical-1.jpg' alt='tent-vertical-1' />
      </div>
      <div className='overview__sentence'>
        통창으로 경치를 보며 스파까지
        <br />
      </div>
      <img className='overview__image' src='./img/bathroomB/bathroomB-horizontal-1.jpg' alt='bathroomB-horizontal-1' />
    </main>
  );
}

export default Overview;
