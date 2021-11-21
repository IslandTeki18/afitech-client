import React, { useEffect } from "react";
import "./HomePage.scss";
import { Link, useHistory } from "react-router-dom";
import { testimonials, projects, blogDisplay } from "../../utils/testData";
import Carousel from "../../components/carousel/Carousel";
import Icon from "../../components/icon/Icon";
import { servicesItems } from "../../utils/serviceItems";
import ProjectDisplayCard from "../../components/projectDisplayCard/ProjectDisplayCard";
import TestimonialCarousel from "../../components/testimonialCarousel/TestimonialCarousel";
import BlogDisplayCard from "../../components/blogDisplayCard/BlogDisplayCard";

const HomePage = () => {
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0, "smooth");
    }, []);

    function renderProjectDisplayCards() {
        return (
            <div className="row">
                {projects.map((project, idx) => (
                    <div
                        className="mobile-padding-bottom col-md-6 col-lg-4 mt-md-4 d-flex justify-content-center"
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
        );
    }

    function renderServiceNavigationList() {
        return (
            <div className="col-md-6">
                <ul className="list-group list-group-flush">
                    {servicesItems.map((item, idx) => (
                        <div className="border-bottom py-3" key={idx}>
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
                                    iconStyle="fas"
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
                </ul>
            </div>
        );
    }

    function renderBlogPostList() {
        return (
            <div className="col-md-8">
                {blogDisplay.map((item, idx) => (
                    <div className="py-4" key={idx}>
                        <BlogDisplayCard
                            img={item.image}
                            imgAlt={`blog-${idx}`}
                            title={item.title}
                            link={item.link}
                            datePublished={item.datePublished}
                        />
                    </div>
                ))}
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
                                We create everything from scratch with the
                                latest technologoy that will be around for years{" "}
                                <Icon
                                    iconStyle="fas"
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
                    <h2 className="text-white mobile-padding-center">
                        Recent Projects
                    </h2>
                    {renderProjectDisplayCards()}
                    <div className="text-center mt-4">
                        <Link
                            className="btn btn-secondary text-uppercase"
                            to="/projects"
                        >
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
                            <TestimonialCarousel testimonials={testimonials} />
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
                                to="/blog-list"
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
                            <h1 className="display-1 text-uppercase">
                                Let's work together!
                            </h1>
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
