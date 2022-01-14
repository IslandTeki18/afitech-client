import React from "react";
import "./Carousel.scss";
import Button from "../../atoms/button/Button";
import Image from "../../atoms/image/Image";

const Carousel = () => {
  // TODO: Make more dynamic
  // TODO: Make Responsive
  // TODO: Update Carousel Captions
  // TODO: Add CTA Buttons
  return (
    <div
      id="carouselIndicators"
      className="carousel slide dkCarousel"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <Button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="0"
          className="btn btn-secondary active"
          aria-current="true"
          aria-label="image 1"
        />
        <Button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="2"
          aria-label="image 2"
          className="btn btn-secondary"
        />
        <Button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="3"
          aria-label="image 3"
          className="btn btn-secondary"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active text-white">
          <Image
            src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
            className="d-block w-100 carousel-img"
            imgAlt="computer 1"
          />
          <div className="carousel-caption d-none d-md-block z-1">
            <h5>First Slide</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <Image
            src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
            className="d-block w-100 carousel-img"
            imgAlt="computer 2"
          />
          <div className="carousel-caption d-none d-md-block z-1">
            <h5>Second Slide</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <Image
            src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
            className="d-block w-100 carousel-img"
            imgAlt="computer 3"
          />
          <div className="carousel-caption d-none d-md-block z-1">
            <h5>Third Slide</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
        <div className="img-overlay" />
      </div>
      <Button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </Button>
      <Button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </Button>
    </div>
  );
};

export default Carousel;
