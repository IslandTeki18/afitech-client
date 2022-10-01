import React, { useEffect } from "react";
import "./HomePage.scss";
import {
  Loader,
  AlertBanner,
  HelpBusinessSection,
  StrategyDesignSection,
  PricingSection,
  LetsWorkTogetherSection,
  WhoWeAreSection,
} from "../../components";
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

  return (
    <div className="dkHomePage">
      <WhoWeAreSection />
      <StrategyDesignSection services={services} />
      <PricingSection />
      <LetsWorkTogetherSection />
    </div>
  );
};

export default HomePage;
