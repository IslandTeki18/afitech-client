import React from "react";
import "./ContactPage.scss";
import { Link } from "react-router-dom";
import Icon from "../../components/icon/Icon";
import ContactForm from "../../components/contactForm/ContactForm";

const ContactPage = () => {
    const socialMediaLinks = [
        {
            name: "Instagram",
            link: "google.com",
            icon: "instagram",
        },
        {
            name: "Github",
            link: "google.com",
            icon: "github",
        },
        {
            name: "LinkedIn",
            link: "google.com",
            icon: "linkedin",
        },
    ];

    function renderSocialLinkColumns() {
        return socialMediaLinks.map((social, idx) => (
            <div className="col-md-4" key={idx}>
                <Link to={social.link}>
                    <Icon
                        icon={social.icon}
                        iconStyle="fab"
                        size="40"
                        color="#3c3c3c"
                        marginBottom="15"
                    />
                    <p>{social.name}</p>
                </Link>
            </div>
        ));
    }
    function renderContactInformationCards() {
        return (
            <div
                id="contactInformation"
                className="col-md-6 order-xs-2 order-md-1"
            >
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body text-center">
                                <Icon
                                    icon="marker"
                                    iconStyle="fas"
                                    size="50"
                                    color="red"
                                    marginBottom="15"
                                />
                                <h3 className="text-muted text-uppercase pb-2">
                                    Social Media
                                </h3>
                                <div className="row">
                                    {renderSocialLinkColumns()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body text-center">
                                <Icon
                                    icon="envelope"
                                    iconStyle="fas"
                                    size="50"
                                    color="red"
                                    marginBottom="15"
                                />
                                <h3 className="text-muted text-uppercase">
                                    Email Us
                                </h3>
                                <p>afitech@test.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body text-center">
                                <Icon
                                    icon="phone"
                                    iconStyle="fas"
                                    size="50"
                                    color="red"
                                    marginBottom="15"
                                />
                                <h3 className="text-muted text-uppercase">
                                    Call Us
                                </h3>
                                <p>801-310-5876</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="dkContactPage">
            <section id="pageHeaderSection" className="bg-dark py-4">
                <div className="container text-white">
                    <div className="row">
                        <div className="col-md-12 text-left">
                            <h1 className="text-uppercase">Contact Us</h1>
                            <p className="text-muted">
                                If you have any questions or inquries, please
                                don't hesitate to contact us! We'd love to hear
                                you ideas and share them with the world!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="pageContactDetailsSection">
                <div className="container py-3">
                    <div className="row">
                        {renderContactInformationCards()}
                        <div className="col-md-6 order-xs-1 order-md-2 mb-2">
                            <h4 className="mb-4">Leave us a message!</h4>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
