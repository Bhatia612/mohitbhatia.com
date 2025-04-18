import React, { useState } from "react";
import "../styles/contact.css"; //

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="stack-section" id="contact">
      <h2 className="stack-title">Contact Me</h2>
      <p className="stack-text">
        Got a project or idea? Feel free to reach out via the form below. I’d love to connect!
      </p>

      {submitted ? (
        <div style={{ color: "#8fff8f", textAlign: "center", fontSize: "1.1rem" }}>
          ✅ Thank you! Your message has been sent.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="stack-grid contact-form">
          <div className="stack-group">
            <h3>Name</h3>
            <p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </p>
          </div>
          <div className="stack-group">
            <h3>Email</h3>
            <p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </p>
          </div>
          <div className="stack-group" style={{ gridColumn: "1 / -1" }}>
            <h3>Message</h3>
            <p>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="What's on your mind?"
              ></textarea>
            </p>
          </div>
          <div style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default Contact;
