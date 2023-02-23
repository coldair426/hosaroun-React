import React from 'react';

function Contactus({ navBox, setNavBox }) {
  return (
    <main
      onClick={() => {
        navBox && setNavBox(false);
      }}>
      나는 컨택트어스
    </main>
  );
}

export default Contactus;
