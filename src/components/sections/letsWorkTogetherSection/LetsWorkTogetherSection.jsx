import React from "react";
import "./LetsWorkTogetherSection.scss";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { IconLabel } from "../../molecules/iconLabel";

export const LetsWorkTogetherSection = (props) => {
  const history = useHistory();
  return (
    <section
      className={`dkLetsWorkTogetherSection bg-${props.theme}`}
      id={props.id}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <IconLabel
          label="AFI TECH"
          icon="fire-flame-curved"
          iconStyle="fas"
          iconColor={props.theme === "dark" ? "#d33636" : "#212729"}
          labelClassName="text-light"
        />
        <div className="ctaWrapper">
          <h5 className="text-light">Ready to get started?</h5>
          <button
            className="btn btn-primary"
            onClick={() => history.push("/pricing")}
          >
            Let's Go!
          </button>
        </div>
      </div>
    </section>
  );
};

LetsWorkTogetherSection.defaultProps = {
  id: "LetsWorkTogetherSection",
  theme: "dark",
};

LetsWorkTogetherSection.propTypes = {
  id: PropTypes.string,
};
