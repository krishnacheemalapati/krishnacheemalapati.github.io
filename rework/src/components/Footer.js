import React, { useCallback } from 'react';

const Footer = () => {
  const handleBackToTop = useCallback((e) => {
    e.preventDefault();
    if (window?.scrollTo) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <footer>
      <div className="row">
        <div className="col-six tab-full pull-right social">
          <ul className="footer-social">
            <li><a href="https://www.linkedin.com/in/krishnacheemalapati/"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="mailto:krishna.r.cheemalapati@gmail.com?cc=krishkrishct@gmail.com&subject=Let%27s%20Get%20In%20Touch"><i className="fa fa-envelope"></i></a></li>
            <li><a href="https://github.com/krishnacheemalapati/"><i className="fa fa-github"></i></a></li>
            <li><a href="https://krishnacheemalapati.github.io/#"><i className="fa fa-link"></i></a></li>
          </ul>
        </div>
        <div className="col-six tab-full">
          <div className="copyright">
            <span>Krishna Cheemalapati's Personal Website</span>
          </div>
        </div>
        <div id="go-top" style={{ display: 'block' }}>
          <a className="smoothscroll" title="Back to Top" href="#top" onClick={handleBackToTop}>
            <i className="fa fa-long-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
