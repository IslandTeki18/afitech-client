import React from "react";
import PropTypes from "prop-types";

const Icon = (props) => {
  function renderFontAwesomeStyle(style) {
    switch (style) {
      case "fas":
        return "fas";
      case "far":
        return "far";
      case "fab":
        return "fab";
      default:
        return "fas";
    }
  }
  return (
    <i
      className={`${renderFontAwesomeStyle(props.iconStyle)} fa-${
        props.icon ? `${props.icon}` : "exclamation-circle"
      }`}
      style={{
        color: `${props.color ? `${props.color}` : "#ffffff"}`,
        fontSize: `${props.size ? `${props.size}px` : "12px"}`,
        marginTop: `${props.marginTop ? `${props.marginTop}px` : "0"}`,
        marginBottom: `${props.marginBottom ? `${props.marginBottom}px` : "0"}`,
        marginRight: `${props.marginRight ? `${props.marginRight}px` : "0"}`,
        marginLeft: `${props.marginLeft ? `${props.marginLeft}px` : "0"}`,
        margin: `${props.margin ? `${props.margin}px` : 0}`,
        cursor: `${props.isClickable ? "pointer" : "arrow"}`,
      }}
    />
  );
};

Icon.propTypes = {
  iconStyle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  isClickable: PropTypes.bool,
  size: PropTypes.string || PropTypes.number,
  marginTop: PropTypes.string || PropTypes.number,
  marginBottom: PropTypes.string || PropTypes.number,
  marginLeft: PropTypes.string || PropTypes.number,
  marginRight: PropTypes.string || PropTypes.number,
  margin: PropTypes.string || PropTypes.number,
};

export default Icon;
