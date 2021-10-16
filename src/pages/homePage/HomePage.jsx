import React from "react";
import "./HomePage.scss";
import { Link, useHistory } from "react-router-dom";
import { testimonials, projects, blogDisplay } from "../../utils/testData";
import Carousel from "../../components/carousel/Carousel";
import Icon from "../../components/icon/Icon";
import ListGroup from "../../components/listGroup/ListGroup";
import { servicesItems } from "../../utils/serviceItems";
import ProjectDisplayCard from "../../components/projectDisplayCard/ProjectDisplayCard";
import TestimonialCarousel from "../../components/testimonialCarousel/TestimonialCarousel";
import BlogDisplayCard from "../../components/blogDisplayCard/BlogDisplayCard";

const HomePage = () => {
    const history = useHistory();

    // TODO: Needs Mobile Responsive
    // TODO: Break sections out

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
                                We create everything from scratch with the
                                latest technologoy that will be around for years{" "}
                                <Icon
                                    isSolid
                                    color="red"
                                    size="30"
                                    icon="fire"
                                />
                            </h1>
                            <h4 className="pb-4">
                                We build small and medium size mobile and web
                                applications. From planning, design,
                                development, deployment, and maintence, we keep
                                our code base scalable, secure, and readable.
                            </h4>
                            <button className="btn btn-primary">
                                all services
                            </button>
                        </div>
                        <div className="col-md-6">
                            <ListGroup isFlush>
                                {servicesItems.map((item) => (
                                    <div className="border-bottom py-3">
                                        <button
                                            type="button"
                                            className="list-group-item d-flex justify-content-between align-items-center w-100"
                                            style={{ border: "unset" }}
                                            aria-current="true"
                                            disabled={item.isDisabled}
                                            onClick={() => {
                                                history.push(item.link);
                                            }}
                                        >
                                            {item.name}
                                            <Icon
                                                icon="long-arrow-alt-right"
                                                isSolid
                                                color={
                                                    item.isDisabled
                                                        ? "lightgrey"
                                                        : "#000000"
                                                }
                                                size="20"
                                            />
                                        </button>
                                    </div>
                                ))}
                            </ListGroup>
                        </div>
                    </div>
                </div>
            </section>
            <section id="recentProjectsSection" className="bg-dark py-6">
                <div className="container">
                    <div className="row">
                        {projects.map((project, idx) => (
                            <div
                                className="col-md-4 d-flex justify-content-center"
                                key={idx}
                            >
                                <ProjectDisplayCard
                                    projectImg={project.projectImg}
                                    imgAlt={project.imgAlt}
                                    projectTitle={project.projectTitle}
                                    shortDescription={project.shortDescription}
                                    link={project.link}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="row justify-content-center mt-4">
                        <div className="col-md-3 text-center">
                            <Link
                                className="btn btn-secondary w-50 text-uppercase"
                                to="/project-list"
                            >
                                All Work
                            </Link>
                        </div>
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
                            <TestimonialCarousel testimonials={testimonials} />
                        </div>
                    </div>
                </div>
            </section>
            <section id="blogSection" className="bg-dark py-6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-white">
                            <h1 className='display-4'>What's New?</h1>
                            <Link
                                to="/blog-list"
                                className="btn btn-secondary mt-5 text-uppercase"
                            >
                                All Posts
                            </Link>
                        </div>
                        <div className="col-md-6">
                            {blogDisplay.map((item, idx) => (
                                <div className="py-2">
                                    <BlogDisplayCard
                                        img={item.image}
                                        imgAlt={`blog-${idx}`}
                                        title={item.title}
                                        description={item.shortdescription}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
