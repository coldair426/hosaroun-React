import React from 'react';
import RoomsCarousel from '../component/RoomsCarousel';

function Photograph({ navBox, setNavBox }) {
  return (
    <main
      className='photograph'
      onClick={() => {
        navBox && setNavBox(false);
      }}>
      <h1>실내</h1>
      <div className='photograph__carousels'>
        <div className='photograph__carousel-h'>
          <RoomsCarousel num='9' adr='./roomsCarousel/indoor/horizontal/indoorHorizontal'></RoomsCarousel>
        </div>
        <div className='photograph__carousel-v'>
          <RoomsCarousel num='10' adr='./roomsCarousel/indoor/vertical/indoorVertical'></RoomsCarousel>
        </div>
      </div>
      <h1>외부</h1>
      <div className='photograph__carousels'>
        <div className='photograph__carousel-h'>
          <RoomsCarousel num='4' adr='./roomsCarousel/outdoor/horizontal/outdoorHorizontal'></RoomsCarousel>
        </div>
        <div className='photograph__carousel-v'>
          <RoomsCarousel num='6' adr='./roomsCarousel/outdoor/vertical/outdoorVertical'></RoomsCarousel>
        </div>
      </div>
    </main>
  );
}

export default Photograph;
