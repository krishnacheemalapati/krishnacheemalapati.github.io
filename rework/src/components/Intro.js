import React, { useCallback } from 'react';

const Intro = () => {
  const handleSmoothScroll = useCallback((e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);
  return (
    <section id="intro">
      <div className="intro-overlay"></div>
      <div className="intro-content">
        <div className="row">
          <div className="col-twelve">
            <h5>Hello World.</h5>
            <h1>I'm Krishna Cheemalapati.</h1>
            <p className="intro-position">
              <span>Software Developer</span>
              <span>Curious Student</span>
            </p>
            <a
              className="button stroke smoothscroll"
              href="#about"
              title="More About Me"
              onClick={(e) => handleSmoothScroll(e, '#about')}
            >
              More About Me
            </a>
          </div>
        </div>
      </div>
      <ul className="intro-social">
        <li><a href="https://www.linkedin.com/in/krishnacheemalapati/"><i className="fa fa-linkedin"></i></a></li>
        <li><a href="mailto:krishna.r.cheemalapati@gmail.com?cc=krishkrishct@gmail.com&subject=Let%27s%20Get%20In%20Touch"><i className="fa fa-envelope"></i></a></li>
        <li><a href="https://github.com/krishnacheemalapati/"><i className="fa fa-github"></i></a></li>
        <li><a href="https://krishnacheemalapati.github.io/#"><i className="fa fa-link"></i></a></li>
      </ul>
    </section>
  );
};

export default Intro;
