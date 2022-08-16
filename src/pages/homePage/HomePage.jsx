import React, { useEffect } from "react";
import "./HomePage.scss";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listBlogs } from "../../redux/actions/blog.actions";
import { listProjects } from "../../redux/actions/project.actions";
import { listTestimonials } from "../../redux/actions/testimonial.actions";
import { listServices } from "../../redux/actions/service.actions";
import Icon from "../../components/atoms/icon/Icon";
import ProjectDisplayCard from "../../components/organisms/projectDisplayCard/ProjectDisplayCard";
import TestimonialCarousel from "../../components/organisms/testimonialCarousel/TestimonialCarousel";
import BlogDisplayCard from "../../components/organisms/blogDisplayCard/BlogDisplayCard";
import Loader from "../../components/atoms/loader/Loader";
import AlertBanner from "../../components/molecules/alertBanner/AlertBanner";
import MinimalHeroSectionTwo from "../../components/sections/heroSections/minimalHeroSectionTwo/MinimalHeroSectionTwo";
import blackSandImage from "../../assets/images/black-sand.jpg";

const HomePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const blogList = useSelector((state) => state.blogList);
  const { loading: blogLoading, error: blogError, blogs } = blogList;
  const projectList = useSelector((state) => state.projectList);
  const {
    loading: projectLoading,
    error: projectError,
    projects,
  } = projectList;
  const testimonialList = useSelector((state) => state.testimonialList);
  const {
    loading: testimonialLoading,
    error: testimonialError,
    testimonials,
  } = testimonialList;
  const serviceList = useSelector((state) => state.serviceList);
  const {
    loading: serviceLoading,
    error: serviceError,
    services,
  } = serviceList;

  useEffect(() => {
    window.scrollTo(0, "smooth");
    dispatch(listBlogs());
    dispatch(listProjects());
    dispatch(listTestimonials());
    dispatch(listServices());
  }, [dispatch]);

  function renderServices() {
    if (!services || serviceLoading) {
      return <Loader />;
    }
    return services.map((item, idx) => (
      <div className="col-md-4 text-center displayServiceCard" key={idx}>
        <img
          src="https://via.placeholder.com/150x150"
          alt="service icon"
          width={150}
          height={150}
        />
        <h3>{item.title}</h3>
        <p className="text-muted">{item.shortDescription}</p>
      </div>
    ));
  }
  return (
    <div className="dkHomePage">
      <section id="heroSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h6 className="text-uppercase">we create ideas</h6>
              <h1 className="text-uppercase">
                how we can help your
                <span className="text-primary ms-2">business</span>
              </h1>
              <p className="text-muted">
                AFI TECH is a web development agency aimed to simplify the web
                development process and provide a simple solution for your
                business that gets the job done.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
            <div className="col-md-5">
              <img
                src="https://via.placeholder.com/500x400"
                alt="placeholder"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="serviceSection">
        <div className="container">
          <div className="section-head text-center">
            <h6 className="text-muted text-uppercase">services</h6>
            <h2 className="text-uppercase">Provide Fire Service</h2>
          </div>
          <div className="row mt-5">{renderServices()}</div>
        </div>
      </section>
      <section id="aboutUsSection"></section>
      <section id="portfolioSection"></section>
      <section id="newsletterSection"></section>
      <section id="teamSection"></section>
      <section id="pricingSection"></section>
      <section id="testimonialSection"></section>
      <section id="blogSection"></section>
      <section id="blogSection"></section>
    </div>
  );
};

export default HomePage;
