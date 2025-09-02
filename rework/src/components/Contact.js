import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    contactEmail: '',
    contactSubject: '',
    contactMessage: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section id="contact">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Contact</h5>
          <h1>I'd Love To Hear From You.</h1>
        </div>
      </div>
      <div className="row contact-form">
        <div className="col-twelve">
          <form name="contactForm" id="contactForm" onSubmit={handleSubmit}>
            <fieldset>
              <div className="form-field">
                <input name="contactName" type="text" id="contactName" placeholder="Name" value={formData.contactName} minLength="2" required onChange={handleChange} />
              </div>
              <div className="form-field">
                <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" value={formData.contactEmail} required onChange={handleChange} />
              </div>
              <div className="form-field">
                <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value={formData.contactSubject} onChange={handleChange} />
              </div>
              <div className="form-field">
                <textarea name="contactMessage" id="contactMessage" placeholder="Message" rows="10" cols="50" required value={formData.contactMessage} onChange={handleChange}></textarea>
              </div>
              <div className="form-field">
                <button className="submitform">Submit</button>
                <div id="submit-loader">
                  <div className="text-loader">Sending...</div>
                  <div className="s-loader">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
          <div id="message-warning"></div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!<br />
          </div>
        </div>
      </div>
      <div className="row contact-info">
        <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-pin"></i>
          </div>
          <h5>Where to find me</h5>
          <p>
            Somewhere in the US<br />
            or possibly Canada too<br />
            Only time will tell
          </p>
        </div>
        <div className="col-four tab-full collapse">
          <div className="icon">
            <i className="icon-mail"></i>
          </div>
          <h5>Reach out via email</h5>
          <p>krishna.r.cheemalapati@gmail.com<br />
            krishna.cheemalapati@mail.utoronto.ca</p>
        </div>
        <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-phone"></i>
          </div>
          <h5>Call Me At</h5>
          <p>Phone: +1 (860) 719 1532<br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
