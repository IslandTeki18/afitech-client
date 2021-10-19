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
                marginTop: `${props.marginTop ? `${props.marginTop}px` : "0"}`,
                marginBottom: `${
                    props.marginBottom ? `${props.marginBottom}px` : "0"
                }`,
                marginRight: `${
                    props.marginRight ? `${props.marginRight}px` : "0"
                }`,
                marginLeft: `${
                    props.marginLeft ? `${props.marginLeft}px` : "0"
                }`,
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
    marginTop: PropTypes.string,
    marginBottom: PropTypes.string,
    marginLeft: PropTypes.string,
    marginRight: PropTypes.string,
};

export default Icon;
