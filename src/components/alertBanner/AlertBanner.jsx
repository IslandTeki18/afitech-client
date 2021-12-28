import React from "react";

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
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        )}
      </div>
    </div>
  );
};

export default AlertBanner;
