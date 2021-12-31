import React, { useEffect } from "react";
import "./HomePage.scss";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listBlogs } from "../../actions/blog.actions";
import { listProjects } from "../../actions/project.actions";
import { listTestimonials } from "../../actions/testimonial.actions";
import { listServices } from "../../actions/service.actions";
import Carousel from "../../components/carousel/Carousel";
import Icon from "../../components/icon/Icon";
import ProjectDisplayCard from "../../components/projectDisplayCard/ProjectDisplayCard";
import TestimonialCarousel from "../../components/testimonialCarousel/TestimonialCarousel";
import BlogDisplayCard from "../../components/blogDisplayCard/BlogDisplayCard";
import Loader from "../../components/loader/Loader";
import AlertBanner from "../../components/alertBanner/AlertBanner";

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

  function renderProjectDisplayCards() {
    return (
      <div className="row">
        {projectError && (
          <AlertBanner variant="danger">{projectError}</AlertBanner>
        )}
        {projectLoading ? (
          <Loader />
        ) : (
          projects
            .filter((project) => project.isPublished)
            .map((project, idx) => (
              <div
                className="mobile-padding-bottom col-md-6 col-lg-4 mt-md-4 d-flex justify-content-center"
                key={idx}
              >
                <ProjectDisplayCard
                  projectImg={project.projectImg}
                  imgAlt={project.title}
                  projectTitle={project.title}
                  shortDescription={project.shortDescription}
                  link={`/project/${project._id}`}
                />
              </div>
            ))
        )}
      </div>
    );
  }

  function renderServiceNavigationList() {
    return (
      <div className="col-md-6">
        <ul className="list-group list-group-flush">
          {serviceError && (
            <AlertBanner variant="danger">{serviceError}</AlertBanner>
          )}
          {serviceLoading ? (
            <div className="d-flex justify-content-center align-items-center">
              <Loader />
            </div>
          ) : (
            services
              .filter((service) => service.isAvailable)
              .map((item, idx) => (
                <div className="border-bottom py-3" key={idx}>
                  <Link
                    type="button"
                    className="list-group-item d-flex justify-content-between align-items-center w-100"
                    style={{ border: "unset" }}
                    aria-current="true"
                    disabled={item.isAvailable}
                    to={`/service/${item._id}`}
                  >
                    {item.title}
                    <Icon
                      icon="long-arrow-alt-right"
                      iconStyle="fas"
                      color={item.isAvailable ? "lightgrey" : "#000000"}
                      size="20"
                    />
                  </Link>
                </div>
              ))
          )}
        </ul>
      </div>
    );
  }

  function renderBlogPostList() {
    return (
      <div className="col-md-8">
        {blogError && <AlertBanner variant="danger">{blogError}</AlertBanner>}
        {blogLoading ? (
          <Loader />
        ) : (
          blogs
            .filter((blog) => blog.isPublished === true)
            .map((item, idx) => (
              <div className="py-4" key={idx}>
                <BlogDisplayCard
                  img={item.image}
                  imgAlt={`blog-${idx}`}
                  title={item.title}
                  link={`/blog/${item._id}`}
                  datePublished={item.updatedAt}
                />
              </div>
            ))
        )}
      </div>
    );
  }
  return (
    <div className="dkHomePage">
      <section id="heroSection">
        <Carousel />
      </section>
      <section id="servicesSection" className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5 className="pb-3">our services</h5>
              <h1 className="pb-2">
                We create everything from scratch with the latest technologoy
                that will be around for years{" "}
                <Icon iconStyle="fas" color="red" size="30" icon="fire" />
              </h1>
              <h4 className="pb-4">
                We build small and medium size mobile and web applications. From
                planning, design, development, deployment, and maintence, we
                keep our code base scalable, secure, and readable.
              </h4>
              <button
                className="btn btn-primary"
                onClick={() => history.push("/services")}
              >
                all services
              </button>
            </div>
            {renderServiceNavigationList()}
          </div>
        </div>
      </section>
      <section id="recentProjectsSection" className="bg-dark py-3">
        <div className="container">
          <h2 className="text-white mobile-padding-center">Recent Projects</h2>
          {renderProjectDisplayCards()}
          <div className="text-center mt-4">
            <Link className="btn btn-secondary text-uppercase" to="/projects">
              All Work
            </Link>
          </div>
        </div>
      </section>
      <section id="testimonialSection" className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>our clients</h5>
              <h3>What our clients say about us</h3>
            </div>
            <div className="col-md-8">
              {testimonialError && (
                <AlertBanner variant="danger">{testimonialError}</AlertBanner>
              )}
              {testimonialLoading ? (
                <Loader />
              ) : (
                <TestimonialCarousel testimonials={testimonials} />
              )}
            </div>
          </div>
        </div>
      </section>
      <section id="blogSection" className="bg-dark py-6">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-white">
              <h1 className="display-4">What's New?</h1>
              <Link
                to="/blogs"
                className="btn btn-secondary mt-5 text-uppercase"
              >
                All Posts
              </Link>
            </div>
            {renderBlogPostList()}
          </div>
        </div>
      </section>
      <section id="connectSection" className="py-6">
        <div className="container py-6">
          <div className="row d-flex align-items-center">
            <div className="col-md-8">
              <h1 className="display-1 text-uppercase">Let's work together!</h1>
            </div>
            <div className="col-md-4">
              <Link to="/contact" className="btn btn-link">
                <Icon
                  iconStyle="fas"
                  icon="long-arrow-alt-right"
                  color="#000000"
                  size="60"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
