import React from 'react';
import { Carousel } from 'react-bootstrap';

function RoomsCarousel({ num, adr }) {
  return (
    <Carousel fade>
      {new Array(+num).fill(0).map((v, i) => (
        <Carousel.Item interval={2000}>
          <img className='d-block w-100' src={adr + (i + 1) + '.jpg'} alt='imgs' />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default RoomsCarousel;
