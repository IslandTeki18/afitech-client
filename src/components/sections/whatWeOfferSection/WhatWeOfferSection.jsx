import React from "react";
import "./WhatWeOfferSection.scss";
import PropTypes from "prop-types";
import { Icon } from "../../atoms";

export const WhatWeOfferSection = (props) => {
  function renderServiceCards() {
    return props.services
      .filter((service) => !service.isAvailable)
      .map((service, idx) => (
        <div className="col-lg-3 col-md-4" key={idx}>
          <div className="card bg-dark border border-white text-white">
            <div className="card-body">
              <div className="iconWrapper mb-3">
                <div className="specialIcon">
                  <Icon color="#dfa804" iconStyle="fas" icon="cubes" size="50" />
                </div>
              </div>
              <h4 className="card-title text-center">{service.title}</h4>
              <p className="card-text text-center">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </div>
      ));
  }
  return (
    <section id={props.id} className="dkWhatWeOfferSection">
      <div className="container">
        <h2 className="display-5 text-center mb-5">What We Offer</h2>
        <div className="row justify-content-center">{renderServiceCards()}</div>
      </div>
    </section>
  );
};

WhatWeOfferSection.defaultProps = {
  id: "WhatWeOfferSection",
};

WhatWeOfferSection.propTypes = {
  id: PropTypes.string,
};
