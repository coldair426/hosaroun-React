import * as React from 'react';
import { useState, useEffect } from 'react';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-bootstrap';
// react-router-dom
import { Routes, Route } from 'react-router-dom';
// styled-reset pakage
import { Reset } from 'styled-reset';
// CSS
import './style/App.css';
import './style/Header.css';
import './style/Footer.css';
import './style/Home.css';
import './style/NavBox.css';
import './style/Overview.css';
import './style/Photograph.css';
import './style/Booknow.css';
import './style/Contactus.css';
import './style/Location.css';
import './style/Kakaomap.css';
import './style/PcHeader.css';
import './style/PcNavBar.css';
// component
import Header from './component/Header';
import Footer from './component/Footer';
import NavBox from './component/NavBox';
import PcHeader from './component/PcHeader';
import PcNavBar from './component/PcNavBar';
// pages
import Home from './pages/Home';
import Overview from './pages/Overview';
import Photograph from './pages/Photograph';
import Location from './pages/Location';
import Booknow from './pages/Booknow';
import Contactus from './pages/Contactus';

function App() {
  // NavBox
  const [navBoxTr, setNavBoxTr] = useState('navbox__ending');
  // PcNavBar
  const [pcNavBar, setPcNavBar] = useState('PcNavBarEnd');
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.pageYOffset);
    });
    document.querySelector('.pc-header').offsetHeight < scrollY ? setPcNavBar('') : setPcNavBar('PcNavBarEnd');
  }, [scrollY]);

  return (
    <React.Fragment>
      <Reset />
      <PcNavBar pcNavBar={pcNavBar} />
      <PcHeader />
      <Header navBoxTr={navBoxTr} setNavBoxTr={setNavBoxTr} />
      <NavBox navBoxTr={navBoxTr} setNavBoxTr={setNavBoxTr} />
      <Routes>
        <Route path='/' element={<Home navBoxTr={navBoxTr} setNavBoxTr={setNavBoxTr} />} />
        <Route path='/overview' element={<Overview navBoxTr={navBoxTr} setNavBoxTr={setNavBoxTr} />} />
        <Route path='/photograph' element={<Photograph navBoxTr={navBoxTr} setNavBoxTr={setNavBoxTr} />} />
        <Route path='/location' element={<Location navBoxTr={navBoxTr} setNavBoxTr={setNavBoxTr} />} />
        <Route path='/booknow' element={<Booknow navBoxTr={navBoxTr} setNavBoxTr={setNavBoxTr} />} />
        <Route path='/contactus' element={<Contactus navBoxTr={navBoxTr} setNavBoxTr={setNavBoxTr} />} />
      </Routes>
      <Footer navBoxTr={navBoxTr} setNavBoxTr={setNavBoxTr} />
    </React.Fragment>
  );
}

export default App;
