import React from "react";
import "./TestimonialCarousel.scss";
import PropTypes from "prop-types";
import Icon from "../icon/Icon";

const TestimonialCarousel = (props) => {
    return (
        <div
            id="testimonialCarouselControls"
            className="dkTestimonialCarousel carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="false"
        >
            <div className="carousel-inner">
                {props.testimonials.map((item) => (
                    <div
                        className={`carousel-item${
                            item.isActive ? " active" : ""
                        }`}
                        key={item.name}
                    >
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src={item.image}
                                        className="w-100 carousel-image rounded-start"
                                        alt={item.imgAlt}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            {item.name}
                                        </h4>
                                        <p className="card-text">
                                            {item.shortDescription}
                                        </p>
                                        <p className="card-text">
                                            <small className="text-muted">
                                                {item.clientPosition} -
                                                {item.clientCompany} -
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
                    isSolid
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
                    isSolid
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