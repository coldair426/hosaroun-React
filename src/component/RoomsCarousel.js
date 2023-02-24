import React from 'react';
import { Carousel } from 'react-bootstrap';

function RoomsCarousel({ num, adr }) {
  return (
    <Carousel fade>
      {new Array(+num).fill('imgs').map((v, i) => (
        <Carousel.Item interval={2000} key={`${v}${i}`}>
          <img className='d-block w-100' src={adr + (i + 1) + '.jpg'} alt='imgs' />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default RoomsCarousel;
