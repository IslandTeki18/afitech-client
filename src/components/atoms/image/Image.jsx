import React from "react";
import PropTypes from "prop-types";

const Image = (props) => {
  return (
      <img
      id={props.id}
        src={props.src}
        srcSet={props.srcSet}
        alt={props.imgAlt}
        className={props.className}
        referrerPolicy={props.refPolicies}
        loading={props.imgLoading}
        height={props.imgHeight}
        width={props.imgWidth}
      />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  imgAlt: PropTypes.string.isRequired,
  className: PropTypes.string,
  refPolicies: PropTypes.string,
  imgLoading: PropTypes.string,
  imgHeight: PropTypes.string || PropTypes.number,
  imgWidth: PropTypes.string || PropTypes.number,
  id: PropTypes.string
};

export default Image;
