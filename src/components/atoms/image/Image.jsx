import React from "react";
import "./Image.scss"
import PropTypes from "prop-types";

const Image = (props) => {
  return (
    <div className="dkImage">
      <img
        src={props.src}
        srcSet={props.srcSet}
        alt={props.imgAlt}
        className={props.className}
        referrerPolicy={props.refPolicies}
        loading={props.imgLoading}
        height={props.imgHeight}
        width={props.imgWidth}
      />
    </div>
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
};

export default Image;
