import React, { useState } from 'react';
import Modal from './Modal';
import Project from './Project';
import intentful from '../images/portfolio/projects/intentful.png';
import intentfulLogo from '../images/portfolio/logos/intentfulLogo.png';
import aisign from '../images/portfolio/projects/aisign.png';
import aisignLogo from '../images/portfolio/logos/aisignLogo.png';
import heartattech from '../images/portfolio/projects/heartattech.png';
import heartattechLogo from '../images/portfolio/logos/heartattechLogo.png';
import swishtistics from '../images/portfolio/projects/swishtistics.jpg';
import swishtisticsLogo from '../images/portfolio/logos/swishtisticsLogo.png';
import pystock from '../images/portfolio/projects/pystock.png';
import pharaohjpg from '../images/portfolio/projects/pharaoh.jpg';
import pharaohLogo from '../images/portfolio/logos/pharaohLogo.webp';
import truthshadows from '../images/portfolio/projects/truthshadows.jpeg';
import truthshadowsLogo from '../images/portfolio/logos/truthshadowsLogo.png';

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  const portfolioItems = [
    {
      logoSrc: aisignLogo,
      title: 'AI Sign',
      type: 'AI/ML for Real-Time Gesture Translation\nFull Stack Web Application',
      gridArea: 'ai-sign',
      modal: {
        imgSrc: aisign,
        title: 'AI Sign',
        description: 'An award-winning AI-powered application that translates sign language gestures into text and speech in real-time. Built using computer vision and machine learning models to bridge communication gaps for the deaf and hard-of-hearing community.',
        category: 'AI / ML Web App',
        detailsLink: 'https://devpost.com/software/ai-sign'
      }
    },
    {
      logoSrc: heartattechLogo,
      title: 'Heart AtTech',
      type: 'Real-Time Alerts with React.js + Firebase\nEmergency Response Web Application',
      gridArea: 'heartattech',
      modal: {
        imgSrc: heartattech,
        title: 'Heart AtTech',
        description: 'An award-winning web application designed to connect CPR/AED-certified volunteers with individuals experiencing cardiac emergencies. By leveraging real-time alerts and location sharing, the platform reduces response times and empowers communities to save lives. Built with React.js, Firebase, and Figma, Heart AtTech integrates seamlessly with existing emergency systems to enhance healthcare accessibility.',
        category: 'Full Stack Web App',
        detailsLink: 'https://devpost.com/software/heart-attech'
      }
    },
    {
      logoSrc: swishtisticsLogo,
      title: 'Swishtistics',
      type: 'Arduino + Machine Learning Integration\nHardware Hack with Full Stack Website',
      gridArea: 'swishtistics',
      modal: {
        imgSrc: swishtistics,
        title: 'Swishtistics',
        description: 'Swishtistics is a smart basketball hoop trainer built with a miniature cardboard prototype. It uses sensors, cameras, and machine learning to analyze shooting techniques in real-time. The system provides instant feedback on shooting form, release angle, and accuracy, helping players improve their skills. Developed with Python, React, and Arduino, Swishtistics combines hardware and software to create an innovative sports analytics platform.',
        category: 'Sports Analytics Platform',
        detailsLink: 'https://github.com/krishnacheemalapati/Swishtistics'
      }
    },
    {
      logoSrc: intentfulLogo,
      title: 'Intentful',
      type: 'MERN Stack with Interactive Data Visuals\nFull Stack Web Application',
      gridArea: 'intentful',
      modal: {
        imgSrc: intentful,
        title: 'Intentful',
        description: 'This is a website prototyped with Figma and built using MongoDB, Express.js, React.js, and Node.js in collaboration with the Voiceflow CTO to help retail companies make chatbots more efficiently. Using transcripts, we create a bubble chart depicting which user intents are most frequent, allowing developers to prioritize these actions when creating their chatbots.',
        category: 'Full Stack Web App',
        detailsLink: 'https://github.com/Dhairya-Khara/TLI-Voiceflow-Project'
      }
    },
    {
      logoSrc: pharaohLogo,
      title: 'Fall of the Pharaoh',
      type: 'Built with Java and Android Studio\nInteractive Mobile Adventure Game',
      gridArea: 'pharaoh',
      modal: {
        imgSrc: pharaohjpg,
        title: 'Fall of the Pharaoh',
        description: "This Android app was built from scratch using Java and Android Studio. It is a choose-your-own-adventure game, where the user's actions determine how the story unfolds. With 16 different possible endings, can you find them all? And can you save the pharaoh?",
        category: 'Mobile App Development',
        detailsLink: 'https://github.com/krishnacheemalapati/Android-Studio-Apps/blob/main/Capstone.apk'
      }
    },
    {
      logoSrc: pystock,
      title: 'Economic Indicators and COVID',
      type: 'Python with Data Visualization Tools\nAnalytical and Visualization Platform',
      gridArea: 'pystock',
      modal: {
        imgSrc: pystock,
        title: 'Economic Indicators and COVID',
        description: 'This project analyzies the impact of COVID-19 on classic economic indicators and stock prices. It queries the Yahoo Finance API for stock data, processes the data using NumPy and Pandas, and then visualizes this information through MatPlotLib.',
        category: 'Python Application',
        detailsLink: 'https://github.com/krishnacheemalapati/Stock-Prices-vs-Economic-Indicators'
      }
    },
    {
      logoSrc: truthshadowsLogo,
      title: 'Truth and Shadows',
      type: 'Poetic 3D Puzzle-Platformer\nBuilt with C# and Unity',
      gridArea: 'truthshadows',
      modal: {
        imgSrc: truthshadows,
        title: 'Truth and Shadows',
        description: 'Truth and Shadows is a poetic 3D puzzle-platformer about navigating the fragmented depths of trauma. Shift between body and shadow to solve light and darkness-based puzzles in a surreal desert world shaped by memory and emotion. The story unfolds through a reversible poem, challenging players to face what was buried and choose who they become.',
        category: '3D Puzzle-Platformer',
        detailsLink: 'https://iexploze.itch.io/truth-and-shadows'
      }
    }
  ];

  return (
    <section id="portfolio">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Portfolio</h5>
          <h1>Check Out Some of My Projects.</h1>
        </div>
      </div>
      <div className="row portfolio-content">
        <div className="col-twelve">
          <div id="folio-wrapper" className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <Project
                key={index}
                logoSrc={item.logoSrc}
                title={item.title}
                type={item.type}
                modal={item.modal}
                onOpenModal={openModal}
                gridArea={item.gridArea}
              />
            ))}
          </div>
        </div>
      </div>

      <Modal show={showModal} onClose={closeModal}>
        {modalContent && (
          <>
            <div className="media">
              <img src={modalContent.imgSrc} alt="" />
            </div>
            <div className="description-box">
              <h4>{modalContent.title}</h4>
              <p>{modalContent.description}</p>
              <div className="categories">{modalContent.category}</div>
            </div>
            <div className="link-box">
              <a href={modalContent.detailsLink} target="_blank" rel="noopener noreferrer">Details</a>
              <button className="popup-modal-dismiss" onClick={closeModal} type="button">Close</button>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Portfolio;
