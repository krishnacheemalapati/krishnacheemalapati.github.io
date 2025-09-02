import React from "react";
import TimelineItem from "./TimelineItem";
import singlekeyLogo from "../images/companies/singlekeyLogo.svg";
import sunnybrookLogo from "../images/companies/sunnybrookLogo.png";
import uoftLogo from "../images/companies/uoftLogo.png";
import aigolearningLogo from "../images/companies/aigolearningLogo.png";
import yaleLogo from "../images/companies/yaleLogo.png";
import seaburyLogo from "../images/companies/seaburyLogo.png";

const Resume = () => {
  const workExperience = [
    {
      icon: "fa-briefcase",
      title: "Software Engineer",
      date: "May 2024 - August 2025",
      subtitle: "SingleKey",
      location: "Toronto, ON, CA",
      content: `<p> • Implemented new features using <strong>Next.js</strong> and <strong>Django</strong>, <strong>increasing annual revenue</strong> by <strong>$300k</strong>.</p> 
                <p> • Designed <strong>Playwright</strong> end-to-end tests and <strong>Python</strong> unit tests to improve release reliability and reduce QA cycles.</p> 
                <p> • Conducted <strong>A/B tests</strong> to experiment with and evaluate UX improvements.</p> 
                <p> • Internationalized the application with <strong>next-i18n</strong> to <strong>expand market share</strong> in Quebec.</p>`,
      logo: singlekeyLogo,
    },
    {
      icon: "fa-briefcase",
      title: "Software Developer",
      date: "May 2023 - September 2023",
      subtitle: "Sunnybrook Research Institute",
      location: "Toronto, ON, CA",
      content: `<p> • Developed and designed annotation interface for collaborative brain signal annotation platform <strong>CrowdEEG</strong>.</p> 
                <p> • Built the backend signal processing pipeline using the <strong>MeteorJS</strong> framework.</p> 
                <p> • Created and trained lightweight <strong>machine learning</strong> models to detect non-wear of medical devices in real time.</p>`,
      logo: sunnybrookLogo,
    },
    {
      icon: "fa-briefcase",
      title: "Information Officer",
      date: "September 2022 - April 2023",
      subtitle: "University of Toronto - Awards and Honors",
      location: "Toronto, ON, CA",
      content: `<p> • Supported the transition of awards data into a new interface.</p> 
                <p> • Worked with the Office of the Vice President of Research and Innovation staff to create a process for reconciling information from different sources.</p> 
                <p> • Validated information about received awards entered by faculty and staff.</p> 
                <p> • Researched and updated a new website related to prestigious national and international research & innovation awards and honors.</p>`,
      logo: uoftLogo,
    },
    {
      icon: "fa-briefcase",
      title: "Java Instructor & Math Curriculum Developer",
      date: "June 2022 - April 2023",
      subtitle: "AIGo Learning",
      location: "Remote (US)",
      content: `<p> • Introduced four classes of students to the basics of <strong>Java</strong> and programming.</p> 
                <p> • Designed hundreds of customized lecture slides, exercises, homework, and assorted other course materials to engage students and build off prior knowledge and interests while applying new learning.</p>`,
      logo: aigolearningLogo,
    },
    {
      icon: "fa-briefcase",
      title: "Data Science Intern and Team Leader",
      date: "July 2020 - August 2020",
      subtitle: "Yale University - Yale Center for Analytical Sciences",
      location: "New Haven, CT, US",
      content: `<p> • Facilitated the creation and implementation of a summer program introducing students to <strong>biostatistics</strong>, <strong>data science</strong>, and <strong>R</strong>.</p> 
                <p> • Served as a team leader/peer mentor and directed 6 students in analyzing and presenting the results of a recent study.</p> 
                <p> • Coordinated with another intern to present survey data to Yale faculty evaluating program effectiveness relative to its pre-pandemic in-person version.</p>`,
      logo: yaleLogo,
    },
    {
      icon: "fa-briefcase",
      title: "Junior Web Developer",
      date: "June 2019 - July 2019",
      subtitle: "Seabury Active Life Community",
      location: "Bloomfield, CT, US",
      content: `<p> • Created a testing platform to accelerate <strong>CI/CD</strong> processes using <strong>PHP</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and <strong>SQL</strong>.</p>
                <p> • Designed a password retrieval mechanism for the employee intranet.</p>
                <p> • Researched options to enhance the security of corporate databases.</p>`,
      logo: seaburyLogo,
    },
  ];

  const education = [
    {
      icon: "fa-graduation-cap",
      title: "Master of Science\nComputer Science",
      subtitle: "Georgia Institute of Technology",
      other: "Focus in Interactive Intelligence",
      date: "January 2026 - June 2028",
      location: "Atlanta, GA, US",
      content:
        "<p>Planned enrollment in Georgia Tech's Master's in Computer Science program with a focus on interactive intelligence. Target coursework includes human computer interaction, graduate algorithms, machine learning, and AI for robotics.</p>",
    },
    {
      icon: "fa-graduation-cap",
      title: "Honors Bachelor of Science\nComputer Science",
      subtitle: "University of Toronto, St. George campus",
      other: "Mathematics Minor, 3.7 GPA",
      date: "September 2021 - October 2025",
      location: "Toronto, ON, CA",
      content:
        "<p>Graduating with an Honours Bachelor of Science in Computer Science with a Mathematics minor (GPA: 3.7). Active in the University of Toronto Freelancers Association and the Autonomous Rover Team. Coursework includes web development, human computer interaction, data structures, algorithms, and machine learning.</p>",
    }
  ];

  return (
    <section id="resume" className="grey-section">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Resume</h5>
          <h1>More of my credentials.</h1>
          <p className="lead">
            Throughout my career I've strived to build both my soft skills (by
            volunteering and tutoring) as well as technical skills (through
            internships and coursework).
          </p>
        </div>
      </div>
      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>Work Experience</h2>
        </div>
        <div className="col-twelve">
          <div className="timeline-wrap">
            {workExperience.map((item, index) => (
              <TimelineItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>Education</h2>
        </div>
        <div className="col-twelve">
          <div className="timeline-wrap">
            {education.map((item, index) => (
              <TimelineItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
