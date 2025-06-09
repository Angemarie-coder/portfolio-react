import React, { useState } from "react";
import "../styles/contactSection.css";
import contact from "../data/contact.json";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    contact.contact.contact_form.fields.forEach((field) => {
      const { name, validation } = field;
      const value = formData[name];

      if (validation.required && !value) {
        newErrors[name] = validation.errorMessage;
      } else if (validation.minLength && value.length < validation.minLength) {
        newErrors[name] = validation.errorMessage;
      } else if (validation.maxLength && value.length > validation.maxLength) {
        newErrors[name] = validation.errorMessage;
      } else if (
        validation.pattern &&
        !new RegExp(validation.pattern).test(value)
      ) {
        newErrors[name] = validation.errorMessage;
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", formData);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">{contact.contact.title}</h1>
        <div className="contact-content">
          <div className="contact-form">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              {contact.contact.contact_form.fields.map((field, index) => (
                <div key={index} className="form-group">
                  <label htmlFor={field.name}>{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      className={errors[field.name] ? "input-error" : ""}
                    />
                  ) : (
                    <input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      className={errors[field.name] ? "input-error" : ""}
                    />
                  )}
                  {errors[field.name] && (
                    <span className="error-message">{errors[field.name]}</span>
                  )}
                </div>
              ))}
              <button type="submit" className="submit-btn">
                {contact.contact.contact_form.submit.text}
              </button>
            </form>
          </div>
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p className="contact-email">
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contact.contact.email}`}>
                {contact.contact.email}
              </a>
            </p>
            <p className="contact-location">
              <strong>Location:</strong> {contact.contact.location.city},{" "}
              {contact.contact.location.country}
            </p>
            <div className="social-links">
              <h3>Social Media</h3>
              <div className="links-container">
                {contact.contact.social_media.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <img
                      src={social.icon}
                      alt={`${social.platform} Icon`}
                      className="social-icon"
                    />
                    {social.platform}
                  </a>
                ))}
              </div>
            </div>
            <div className="professional-links">
              <h3>Professional Profiles</h3>
              <div className="links-container">
                {contact.contact.professional_profiles.map(
                  (profile, index) => (
                    <a
                      key={index}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <img
                        src={profile.icon}
                        alt={`${profile.platform} Icon`}
                        className="social-icon"
                      />
                      {profile.platform}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
