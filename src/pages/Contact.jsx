import React, { useState } from 'react';
import "../styles/contact.css";

function Links() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isHovering, setIsHovering] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-section">
      <h2 className="contact-title">Let's Connect</h2>
      <p className="contact-text">
        Whether you have a project or just want to debate tabs vs spaces
        <span className="hidden-joke"> (spoiler: tabs win)</span> — I'm all ears.
      </p>

      {isSubmitted ? (
        <div className="success-message">
          <p>✓ Message sent! I'll respond faster than 
            <span className="hidden-joke"> JavaScript's event loop</span>.
          </p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="No SQL injections please"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@real-email.com (not your@temp-mail.org)"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Describe your project or just vent about JavaScript fatigue"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            ></textarea>
            {isHovering && (
              <div className="form-hint">
                Pro tip: Including "urgent" or "ASAP" increases response time by 0%
              </div>
            )}
          </div>
          <button type="submit" className="submit-button">
            Send Message
            <span className="button-subtext">(No spam, I promise - cross my heart and hope to 404)</span>
          </button>
        </form>
      )}
    </div>
  );
}

export default Links;