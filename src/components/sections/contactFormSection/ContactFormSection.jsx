import React from "react";
import "./ContactFormSection.scss";
import PropTypes from "prop-types";
import { ContactForm } from "../../organisms";

export const ContactFormSection = (props) => {
  return (
    <section id="contactFormSection" className="py-5 bg-light">
      <div className="container">
        <h1 className="diplay-4">Let's work together!</h1>
        <div className="row align-items-center text-dark">
          <ContactForm formData={props.form} collectData={props.collectData} />
        </div>
      </div>
    </section>
  );
};

ContactFormSection.defaultProps = {
  id: "ContactFormSection",
};

ContactFormSection.propTypes = {
  id: PropTypes.string,
  form: PropTypes.object.isRequired,
  collectData: PropTypes.object.isRequired,
};
