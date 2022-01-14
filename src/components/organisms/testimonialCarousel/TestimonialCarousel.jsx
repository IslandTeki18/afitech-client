import React from "react";
import "./TestimonialCarousel.scss";
import PropTypes from "prop-types";
import Icon from "../../atoms/icon/Icon";

const TestimonialCarousel = (props) => {
  return (
    <div
      id="testimonialCarouselControls"
      className="dkTestimonialCarousel carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="false"
    >
      <div className="carousel-inner">
        {props.testimonials.map((item, idx) => (
          <div
            className={`carousel-item${item.isActive ? " active" : ""}`}
            key={idx}
          >
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={item.image || "http://placehold.jp/500x300.png"}
                    className="w-100 carousel-image rounded-start"
                    alt={item.name}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">{item.testimonial}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        {item.clientCompanyPosition} -{item.companyName} -
                        {item.companyLocation}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn btn-link me-2"
        type="button"
        data-bs-target="#testimonialCarouselControls"
        data-bs-slide="prev"
      >
        <Icon
          iconStyle="fas"
          icon="long-arrow-alt-left"
          color="#000000"
          size="40"
        />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="btn btn-link"
        type="button"
        data-bs-target="#testimonialCarouselControls"
        data-bs-slide="next"
      >
        <Icon
          iconStyle="fas"
          icon="long-arrow-alt-right"
          color="#000000"
          size="40"
        />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
TestimonialCarousel.propTypes = {
  testimonials: PropTypes.array.isRequired,
};

export default TestimonialCarousel;
