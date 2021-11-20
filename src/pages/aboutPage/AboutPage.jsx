import React from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import TeamMemberCard from "../../components/teamMemberCard/TeamMemberCard";
import "./AboutPage.scss";

const AboutPage = () => {
    return (
        <div className="dkAboutPage">
            <section id="aboutHeaderSection" className="py-5 bg-dark">
                <div className="container text-white">
                    <h1 className="display-1">
                        ABOUT AFI TECH
                    </h1>
                    <h6 className="text-muted">AFI TECH's goal is to deliver fast and reliable web and mobile software solutions for companies or individuals.</h6>
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
