import React from "react";
import "./Carousel.scss";

const Carousel = () => {
    return (
        <div
            id="carouselIndicators"
            className="carousel slide dkCarousel"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active text-white">
                    <img
                        src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
                        className="d-block w-100 carousel-img"
                        alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block z-1">
                        <h5>First Slide</h5>
                        <p>
                            Some representative placeholder content for the
                            third slide.
                        </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1472&q=80"
                        className="d-block w-100 carousel-img"
                        alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block z-1">
                        <h5>Second Slide</h5>
                        <p>
                            Some representative placeholder content for the
                            third slide.
                        </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                        className="d-block w-100 carousel-img"
                        alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block z-1">
                        <h5>Third Slide</h5>
                        <p>
                            Some representative placeholder content for the
                            third slide.
                        </p>
                    </div>
                </div>
                <div className="img-overlay" />
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselIndicators"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselIndicators"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
