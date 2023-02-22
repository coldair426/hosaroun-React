// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-bootstrap';
// styled-reset pakage
import * as React from 'react';
import { Reset } from 'styled-reset';

import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';

const App = () => (
  <React.Fragment>
    <Reset />
    <Header />
    <Home />
    <Footer />
  </React.Fragment>
);

export default App;
