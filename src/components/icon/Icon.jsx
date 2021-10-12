import React from "react";
import PropTypes from "prop-types";

const Icon = (props) => {
    return (
        <i
            className={`${
                props.isSolid ? "fas" : props.isRegular ? "far" : "fas"
            } fa-${props.icon ? `${props.icon}` : "exclamation-circle"}`}
            style={{
                color: `${props.color ? `${props.color}` : "#ffffff"}`,
                fontSize: `${props.size ? `${props.size}px` : "12px"}`,
            }}
        />
    );
};

Icon.propTypes = {
    isSolid: PropTypes.bool.isRequired,
    isRegular: PropTypes.bool.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.string,
};

export default Icon;
