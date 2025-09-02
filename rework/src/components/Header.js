import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('intro');

  const toggleNav = (e) => {
    e.preventDefault();
    setIsNavOpen(!isNavOpen);
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <header>
      <div>
        <div className="top-bar">
          <a className={`menu-toggle ${isNavOpen ? 'is-clicked' : ''}`} href="#" onClick={toggleNav}><span>Menu</span></a>
          <div className="logo">
            <a href="index.html">Krishna C.</a>
          </div>
          <nav id="main-nav-wrap">
            <ul className="main-navigation" style={{ display: isNavOpen ? 'block' : 'none' }}>
              <li className={activeLink === 'intro' ? 'current' : ''}>
                <Link to="intro" smooth={true} duration={500} spy={true} onSetActive={handleSetActive} onClick={() => setIsNavOpen(false)}>Home</Link>
              </li>
              <li className={activeLink === 'about' ? 'current' : ''}>
                <Link to="about" smooth={true} duration={500} spy={true} onSetActive={handleSetActive} onClick={() => setIsNavOpen(false)}>About</Link>
              </li>
              <li className={activeLink === 'resume' ? 'current' : ''}>
                <Link to="resume" smooth={true} duration={500} spy={true} onSetActive={handleSetActive} onClick={() => setIsNavOpen(false)}>Resume</Link>
              </li>
              <li className={activeLink === 'portfolio' ? 'current' : ''}>
                <Link to="portfolio" smooth={true} duration={500} spy={true} onSetActive={handleSetActive} onClick={() => setIsNavOpen(false)}>Projects</Link>
              </li>
              <li className={activeLink === 'contact' ? 'current' : ''}>
                <Link to="contact" smooth={true} duration={500} spy={true} onSetActive={handleSetActive} onClick={() => setIsNavOpen(false)}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
