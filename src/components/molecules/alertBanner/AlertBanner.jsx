import React from "react";
import Button from "../../atoms/button/Button";
import PropTypes from 'prop-types'

const AlertBanner = (props) => {
  return (
    <div className="dkAlertBanner">
      <div
        className={`alert alert-${props.variant || "secondary"} ${
          props.isDismissable && "alert-dismissible fade show"
        }`}
        role="alert"
      >
        {props.children}
        {props.isDismissable && (
          <Button
            type="button"
            class="btn-close"
            data-bs-dismiss="alter"
            ariaLabel="Close"
          />
        )}
      </div>
    </div>
  );
};

AlertBanner.propTypes = {
  variant: PropTypes.string,
  isDismissable: PropTypes.bool
}

export default AlertBanner;
