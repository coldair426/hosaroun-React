import React from 'react';

function Location({ navBox, setNavBox }) {
  return (
    <main
      onClick={() => {
        navBox && setNavBox(false);
      }}>
      나는 로케이션
    </main>
  );
}

export default Location;
