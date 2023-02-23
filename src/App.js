import * as React from 'react';
import { useState } from 'react';
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
// component
import Header from './component/Header';
import Footer from './component/Footer';
import NavBox from './component/NavBox';
// pages
import Home from './pages/Home';
import Overview from './pages/Overview';
import Photograph from './pages/Photograph';
import Location from './pages/Location';
import Booknow from './pages/Booknow';
import Contactus from './pages/Contactus';

function App() {
  // navBox 설정
  const [navBox, setNavBox] = useState(false);
  return (
    <React.Fragment>
      <Reset />
      <Header navBox={navBox} setNavBox={setNavBox} />
      {/* NavBox 컴포넌트 조건부렌더링 */}
      {navBox && <NavBox setNavBox={setNavBox} />}
      <Routes>
        <Route path='/' element={<Home navBox={navBox} setNavBox={setNavBox} />} />
        <Route path='/overview' element={<Overview navBox={navBox} setNavBox={setNavBox} />} />
        <Route path='/photograph' element={<Photograph navBox={navBox} setNavBox={setNavBox} />} />
        <Route path='/location' element={<Location navBox={navBox} setNavBox={setNavBox} />} />
        <Route path='/booknow' element={<Booknow navBox={navBox} setNavBox={setNavBox} />} />
        <Route path='/contactus' element={<Contactus navBox={navBox} setNavBox={setNavBox} />} />
      </Routes>
      <Footer navBox={navBox} setNavBox={setNavBox} />
    </React.Fragment>
  );
}

export default App;
