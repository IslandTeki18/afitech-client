import React from "react";
import PropTypes from "prop-types";

export const Icon = (props) => {
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
        padding: `${props.padding ? `${props.padding}px` : 0}`,
        paddingLeft: `${props.paddingLeft ? `${props.paddingLeft}px` : 0}`,
        paddingRight: `${props.paddingRight ? `${props.paddingRight}px` : 0}`,
        paddingTop: `${props.paddingTop ? `${props.paddingTop}px` : 0}`,
        paddingBottom: `${
          props.paddingBottom ? `${props.paddingBottom}px` : 0
        }`,
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
  padding: PropTypes.string || PropTypes.number,
  paddingLeft: PropTypes.string || PropTypes.number,
  paddingRight: PropTypes.string || PropTypes.number,
  paddingTop: PropTypes.string || PropTypes.number,
  paddingBottom: PropTypes.string || PropTypes.number,
};