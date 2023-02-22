// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-bootstrap';
// react-router-dom
import { Routes, Route } from 'react-router-dom';
// styled-reset pakage
import * as React from 'react';
import { Reset } from 'styled-reset';
// CSS
import './style/App.css';
import './style/Header.css';
import './style/Footer.css';
import './style/Home.css';
import './style/NavBox.css';
import './style/Overview.css';
// component
import Header from './component/Header';
import Footer from './component/Footer';
import NavBox from './component/NavBox';
// pages
import Home from './pages/Home';
import Overview from './pages/Overview';

const App = () => (
  <React.Fragment>
    <Reset />
    <Header />
    <NavBox />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/overview' element={<Overview />} />
      <Route path='/rooms' element={<div>rooms입니다.</div>} />
      <Route path='/location' element={<div>location입니다.</div>} />
      <Route path='/booknow' element={<div>booknow입니다.</div>} />
      <Route path='/contactus' element={<div>contactus입니다.</div>} />
    </Routes>

    <Footer />
  </React.Fragment>
);

export default App;
