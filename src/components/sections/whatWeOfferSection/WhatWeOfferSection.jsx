import React from "react";
import "./WhatWeOfferSection.scss";
import PropTypes from "prop-types";

export const WhatWeOfferSection = (props) => {
  return (
    <section id={props.id} className="dkWhatWeOfferSection">
      <div className="container">
        <div className="row"></div>
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
