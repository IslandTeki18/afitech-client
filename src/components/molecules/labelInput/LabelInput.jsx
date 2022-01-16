import React from "react";
import "./LabelInput.scss";
import PropTypes from "prop-types";
import Input from "../../atoms/input/Input";

const LabelInput = (props) => {
    return (
        <div className="dkLabelInput">
            {props.label && (
                <label
                    htmlFor={props.id}
                    className={`form-label${
                        props.labelClassName ? ` ${props.labelClassName}` : ""
                    }`}
                >
                    {props.label}
                </label>
            )}
            <Input
                type={props.type}
                className={`form-control${
                    props.inputClassName ? ` ${props.inputClassName}` : ""
                }`}
                placeholder={props.placeholder}
                id={props.id}
                onChange={(e) => props.callback(e.target.value)}
            />
        </div>
    );
};

LabelInput.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    labelClassName: PropTypes.string,
    inputClassName: PropTypes.string,
    callback: PropTypes.func.isRequired,
};

export default LabelInput;
