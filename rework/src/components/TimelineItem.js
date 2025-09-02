import React from 'react';

const TimelineItem = ({ item }) => {
  const { icon, title, date, subtitle, content, logo, location, other } = item;

  return (
    <div className="timeline-block">
      <div className="timeline-ico">
        <i className={`fa ${icon}`}></i>
      </div>
      <div className="timeline-header">
        {logo && <img src={logo} alt="company logo" className="timeline-logo" />}
        <h3>
          {title.split('\n').map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </h3>
  {other && <p className="timeline-other">{other}</p>}
  <p className="timeline-date">{date}</p>
        {location && <p className="timeline-location">{location}</p>}
      </div>
      <div className="timeline-content">
        <h4>{subtitle}</h4>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
};

export default TimelineItem;
