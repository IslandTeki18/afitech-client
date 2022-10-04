import React from "react";
import "./PricingSection.scss";
import PropTypes from "prop-types";
import { PRICING_TIERS } from "./pricingData";
import { IconLabel } from "../../molecules/iconLabel";

export const PricingSection = (props) => {
  function renderPricingCards() {
    return PRICING_TIERS.map((item, idx) => (
      <div className="col-lg-4" key={idx}>
        <div className="card pricingCard">
          <div className="priceLabel">
            ${item.lowPrice} -
            {item.tierType === "Enterprise" ? " Higher Budget" : ` $${item.highPrice}`}
          </div>
          <h4 className="planName">{item.name}</h4>
          <h6 className="tierType">{item.tierType}</h6>
          <p className="description text-muted">{item.description}</p>
          <hr />
          <div className="benefitIcons">
            {item.pros.map((pro, idx) => (
              <IconLabel
                label={pro}
                key={idx}
                icon="circle-check"
                iconStyle="fas"
                iconColor="#000"
              />
            ))}
          </div>
          <div className="benefitIcons mb-4">
            {item.cons.map((con, idx) => (
              <IconLabel
                label={con}
                key={idx}
                icon="circle-xmark"
                iconStyle="far"
                iconColor="#000"
              />
            ))}
          </div>
          {!item.isAvailable && <p className="text-center text-danger">This plan is not available at the moment.</p>}
          <button disabled={!item.isAvailable} className="btn btn-outline-primary">Get Started</button>
        </div>
      </div>
    ));
  }

  return (
    <section className="dkPricingSection" id={props.id}>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center text-center">
          <h2 className="planHeader display-5 text-white">Choose the best plan that best works for you?</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">{renderPricingCards()}</div>
      </div>
    </section>
  );
};

PricingSection.defaultProps = {
  id: "PricingSection",
};

PricingSection.propTypes = {
  id: PropTypes.string,
};
