import React, { useCallback } from 'react';
import profilePic from '../images/site/profile-pic.jpg';
import resume from '../images/site/resume.pdf';

const About = () => {
  const handleSmoothScroll = useCallback((e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <section id="about">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>About</h5>
          <h1>Let me introduce myself.</h1>
          <div className="intro-info">
            <img src={profilePic} alt="Krishna Cheemalapati" />
            <p className="lead">My passion for computer science was born from an obsession with the elegance of poetry in elementary school, inspiration from the plethora of feats programs can accomplish, and the creativity inherent to creating both. At its best, programming is the art of crafting practical poetry, and I aspire to ensure all the code I write lives up to these ideals. </p>
          </div>
        </div>
      </div>
      <div className="row button-section">
        <div className="col-twelve">
          <a
            href="#contact"
            title="Let's Talk"
            className="button stroke smoothscroll"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
          >
            Let's Talk
          </a>
          <a href={resume} title="Download Resume" className="button button-primary">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default About;
