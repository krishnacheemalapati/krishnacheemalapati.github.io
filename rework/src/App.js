import React from 'react';
import './css/base.css';
import './css/main.css';
import './css/vendor.css';
import './css/font-awesome/css/font-awesome.min.css';
import './css/micons/micons.css';


import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div id="top">
      <Header />
      <Intro />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
