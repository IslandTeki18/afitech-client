import React from "react";
import "./IconLabel.scss";
import PropTypes from "prop-types";
import { Icon } from "../../atoms";

export const IconLabel = (props) => {
  return (
    <div className="dkIconLabel">
      <Icon
        icon={props.icon}
        size={20}
        color={props.iconColor}
        iconStyle={props.iconStyle}
      />
      <h6>{props.label}</h6>
    </div>
  );
};

IconLabel.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  iconStyle: PropTypes.string,
};
