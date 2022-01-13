import React from "react";
import "./LabelInput.scss";
import PropTypes from "prop-types";

const LabelInput = (props) => {
    return (
        <div className="dkLabelInput">
            {props.label && (
                <label
                    for="inputEmail4"
                    className={`form-label${
                        props.labelClassName ? ` ${props.labelClassName}` : ""
                    }`}
                >
                    {props.label}
                </label>
            )}
            <input
                type={props.type}
                className={`form-control${
                    props.inputClassName ? ` ${props.inputClassName}` : ""
                }`}
                placeholder={props.placeholder}
                id={props.label}
                onChange={(e) => props.callback(e.target.value)}
            />
        </div>
    );
};

LabelInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    labelClassName: PropTypes.string,
    inputClassName: PropTypes.string,
    callback: PropTypes.func.isRequired,
};

export default LabelInput;
