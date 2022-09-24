import React from "react";
import PropTypes from "prop-types";

export const Button = (props) => {
  return (
    <button
      id={props.id}
      type={props.type}
      onClick={props.onClick}
      className={props.className}
      data-bs-target={props.dataBSTarget}
      data-bs-slide-to={props.dataBSSlideTo}
      data-bs-slide={props.dataBSSlide}
      data-bs-dismiss={props.dataBSDismiss}
      aria-current={props.ariaCurrent}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
  dataBSTarget: PropTypes.string,
  dataBSSlideTo: PropTypes.string,
  dataBSSlide: PropTypes.string,
  dataBSDismiss: PropTypes.string,
  ariaCurrent: PropTypes.string,
  ariaLabel: PropTypes.string,
};