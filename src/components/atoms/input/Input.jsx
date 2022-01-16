import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      title={props.title}
      className={props.className}
      pattern={props.pattern}
      placeholder={props.placeholder}
      step={props.step}
      list={props.list}
      maxLength={props.maxLength}
      max={props.max}
      min={props.min}
      disabled={props.disabled}
      value={props.value}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      onClick={props.onClick}
      required={props.required}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  step: PropTypes.string,
  list: PropTypes.string,
  maxLength: PropTypes.string,
  max: PropTypes.string,
  min: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  required: PropTypes.bool,
};

export default Input;
