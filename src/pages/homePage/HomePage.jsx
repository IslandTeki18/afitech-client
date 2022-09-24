import React, { useEffect } from "react";
import "./HomePage.scss";
import { Loader, AlertBanner, HelpBusinessSection } from "../../components";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listBlogs } from "../../redux/actions/blog.actions";
import { listProjects } from "../../redux/actions/project.actions";
import { listTestimonials } from "../../redux/actions/testimonial.actions";
import { listServices } from "../../redux/actions/service.actions";
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
      <HelpBusinessSection />
      <section id="serviceSection">
        <div className="container">
          <div className="section-head text-center">
            <h6 className="text-muted text-uppercase">services</h6>
            <h2 className="text-uppercase">Provide Fire Service</h2>
          </div>
          <div className="row mt-5">{renderServices()}</div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
