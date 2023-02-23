import React from 'react';

function Booknow({ navBox, setNavBox }) {
  return (
    <main
      onClick={() => {
        navBox && setNavBox(false);
      }}>
      나는 북나우
    </main>
  );
}

export default Booknow;
