import React, { useEffect } from 'react';

function Booknow({ navBoxTr, setNavBoxTr }) {
  useEffect(() => {
    setNavBoxTr('navbox__ending');
  }, [setNavBoxTr]);
  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 최상단으로 스크롤링
  }, []);
  return (
    <main
      className='booknow'
      onClick={() => {
        navBoxTr === '' && setNavBoxTr('navbox__ending');
      }}>
      <div className='booknow__booknow'>
        <div className='booknow__booking'>
          <h1>실시간 예약</h1>
          <ul>
            <li>에어비앤비에서 예약 가능합니다.</li>
            <li>
              <a href='https://www.airbnb.co.kr/rooms/717697795659629052?check_in=2023-01-16&check_out=2023-01-22&guests=1&adults=1&s=67&unique_share_id=ac5c4745-93c3-4bd0-847e-ad975318032f'>
                <span className='booknow__impact booknow__impact-link'>에어비앤비 바로가기</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='booknow__space'>
          <h2>이용 공간</h2>
          <ul>
            <li>
              주방, 거실, 침실 2개, 화장실 3개와 마당 전체를
              <span className='booknow__impact'> 단독 이용 가능 </span>합니다.
            </li>
            <li>2층은 화장실만 이용 가능하며 그 외 2층 공간은 닫혀있습니다.</li>
          </ul>
          <h3>1층</h3>
          <ul>
            <li>마당(단독이용), 거실, 주방, 침실(main), 침실(second), 화장실(main), 화장실(second)</li>
          </ul>
          <h3>2층</h3>
          <ul>
            <li>화장실</li>
          </ul>
        </div>
        <div className='booknow__check'>
          <h2>확인사항</h2>
          <ul>
            <li>
              옆집에 이웃이 있으니
              <span className='booknow__impact'> 밤 10시 이후</span> 야외에서의 너무
              <span className='booknow__impact'> 큰 소음</span>은 자제해주세요.
            </li>
            <li>웰컴 티로 간식과 함께 캡슐커피를 인원수대로 준비해드립니다.</li>
            <li></li>
            <li></li>
          </ul>
          <div></div>
        </div>
        <div className='booknow__rule'>
          <h2>이용 규칙</h2>
          <h3>이용 시간</h3>
          <ul>
            <li>체크인: 오후 3:00 ~ 오후 5:00</li>
            <li>체크아웃: 오후 12:00 까지</li>
          </ul>
          <h3>인원</h3>
          <ul>
            <li>기본 인원은 4명입니다.</li>
            <li>최대 인원은 총 6명까지 가능합니다.</li>
            <li>인원 추가 시 비용은 1인당 15,000원입니다. (미취학아동 포함)</li>
            <li>
              <span className='booknow__impact'>반려동물 동반과 흡연은 불가합니다.</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Booknow;
