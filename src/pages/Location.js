import React, { useState, useEffect } from 'react';
import CopyAlert from '../component/CopyAlert';
import Kakaomap from './../component/Kakaomap';

function Location({ navBoxTr, setNavBoxTr }) {
  useEffect(() => {
    setNavBoxTr('navbox__ending');
  }, [setNavBoxTr]);
  const [anim, setAnim] = useState('');

  const copyButton = () => {
    const copyTextArea = document.createElement('textarea');
    copyTextArea.value = '강원 춘천시 동면 순환대로 1154-48';
    copyTextArea.style.top = '0';
    copyTextArea.style.left = '0';
    copyTextArea.style.position = 'fixed';
    document.body.appendChild(copyTextArea);
    copyTextArea.focus();
    copyTextArea.select();
    try {
      document.execCommand('copy');
      setAnim('copy-alert__end');
      setTimeout(() => {
        setAnim('');
      }, 1000);
    } catch (err) {
      console.error('텍스트 복사에 실패했습니다.', err);
    }
    document.body.removeChild(copyTextArea);
  };

  return (
    <main
      className='location'
      onClick={() => {
        navBoxTr === '' && setNavBoxTr('navbox__ending');
      }}>
      <div className='location-container flex-col'>
        <div className='location-container__description'>
          <div className='container__description--hypen'>주소</div>
          <div className='container__description__text-area'>
            <div className='container__description--text'>강원도 춘천시 동면 순환대로 1154-48.</div>
            <button className='img-link-btn' onClick={copyButton}>
              주소 복사
            </button>
          </div>
        </div>
        <div className='location-container__description location-container__description-2nd'>
          <div className='container__description--hypen'>오시는 길</div>
          <div className='container__description--text'>제이콥스 스테이션 건너편, 검은색 가건물 옆길로 올라오시면 양문형 큰 대문이 보입니다.</div>
        </div>
        <Kakaomap />
        <CopyAlert anim={anim} />
      </div>
    </main>
  );
}

export default Location;
