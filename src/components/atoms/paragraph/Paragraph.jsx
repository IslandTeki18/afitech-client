import React from "react";
import PropTypes from "prop-types";

export const Paragraph = (props) => {
  return (
    <p {...props} className={props.className} id={props.id}>
      {props.children}
    </p>
  );
};

Paragraph.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};
