import React from "react";
import "./StrategyDesignSection.scss";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Icon } from "../../atoms";

export const StrategyDesignSection = (props) => {
  const history = useHistory();
  function renderServiceCards() {
    return props.services.map((item, idx) => (
      <div className="col-lg-4 col-sm-12" key={idx}>
        <div className="card serviceCard">
          <Icon icon="fire-flame-curved" iconStyle="fas" size="40" color="#000" />
          <h4>{item.title}</h4>
          <p>{item.shortDescription}</p>
          <button
            className="btn btn-light"
            onClick={() => history.push(`/service/${item._id}`)}
          >
            Learn More
          </button>
        </div>
      </div>
    ));
  }
  return (
    <section className="dkStrategyDesignSection" id={props.id}>
      <div className="container">
        <div className="textWrapper">
          <h2>Through strategy and design, we create beautiful results.</h2>
          <p className="text-muted">
            We strive to make the best products for growth and expandition
          </p>
        </div>
        <div className="row justify-content-center align-items-center">
          {renderServiceCards()}
        </div>
      </div>
    </section>
  );
};

StrategyDesignSection.defaultProps = {
  id: 'StrategyDesignSection'
}

StrategyDesignSection.propTypes = {
  id: PropTypes.string,
  services: PropTypes.array,
};
