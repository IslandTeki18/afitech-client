import React from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import TeamMemberCard from "../../components/teamMemberCard/TeamMemberCard";
import "./AboutPage.scss";

const AboutPage = () => {
    return (
        <div className="dkAboutPage">
            <section id="aboutHeaderSection">
                <div className="img-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1523296707887-c69e8e0e9fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="about title section"
                        className="img-cover"
                    />
                    <div className="img-overlay" />
                    <div className="container content-overlay py-md-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-8">
                                <h1 className="title-text text-uppercase">
                                    About Us
                                </h1>
                                <p className="subtitle">
                                    With over 3 years of programming
                                    experiences, my goal with AFI TECH is create
                                    the dream you have for your business or idea
                                    and make that come to life!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="meetTheTeamSection">
                <div className="container py-5">
                    <h1 className="display-3">Meet the team</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <TeamMemberCard
                                name="Landon McKell"
                                position="CTO / Developer"
                                profileImg="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                                github="github.com/landon"
                                linkedIn="linkedin.com/landon-mckell"
                                other="landonmckell.com"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id="callToActionSection" className="py-5 bg-dark">
                <div className="container">
                    <div className="row align-items-center text-white">
                        <div className="col-lg-7 text-center text-lg-left mb-4">
                            <h2>Checkout out work!</h2>
                            <p className="text-small mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla bibendum nunc non felis
                                sollicitudin, ut convallis ante varius. Donec
                                quis placerat ipsum, id tincidunt orci.
                            </p>
                        </div>
                        <div className="col-lg-5 text-center text-lg-right">
                            <button className="btn btn-primary">
                                View Services
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contactFormSection" className="py-5 bg-light">
                <div className="container">
                    <h1 className="diplay-4">Let's work together!</h1>
                    <div className="row align-items-center text-dark">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
