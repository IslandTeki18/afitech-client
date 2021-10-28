import React from "react";
import "./ContactPage.scss";
import Icon from "../../components/icon/Icon";

const ContactPage = () => {
    function renderContactInformationCards() {
        return (
            <div id="contactInformation" className="col-md-6">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body text-center">
                                <Icon
                                    icon="marker"
                                    isSolid
                                    size="30"
                                    color="red"
                                    marginBottom="15"
                                />
                                <h3 className="text-muted">Our Address</h3>
                                <p>
                                    123 StreetName Rd, Spanish Fork, UT, 84660
                                </p>
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
                                    isSolid
                                    size="30"
                                    color="red"
                                    marginBottom="15"
                                />
                                <h3 className="text-muted">Email Us</h3>
                                <p>afitechconsultancy@test.com</p>
                                <p>landonCEO@test.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body text-center">
                                <Icon
                                    icon="phone"
                                    isSolid
                                    size="30"
                                    color="red"
                                    marginBottom="15"
                                />
                                <h3 className="text-muted">Call Us</h3>
                                <p>801-555-5555</p>
                                <p>801-555-5555</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    function renderContactFormCard() {
        return (
            <div id="contactForm" className="col-md-6">
                <div className="card p-3">
                    <form>
                        <div class="row pb-3">
                            <div class="col">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="First name"
                                    aria-label="First name"
                                />
                            </div>
                            <div class="col">
                                <input
                                    type="email"
                                    class="form-control"
                                    placeholder="Email"
                                    aria-label="Email"
                                />
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Subject"
                                    aria-label="Subject"
                                />
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col">
                                <textarea
                                    className="form-control"
                                    name="message"
                                    placeholder="Message"
                                    id="messageTextArea"
                                    cols="30"
                                    rows="8"
                                />
                            </div>
                        </div>
                        <button className="btn btn-primary" type="submit">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="dkContactPage">
            <section id="pageHeaderSection">
                <div className="container pt-4 pb-2">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="text-uppercase">Contact</h1>
                            <hr className="custom-divider" />
                            <p className="text-muted">
                                Magnam dolores commodi suscipit. Necessitatibus
                                eius consequatur ex aliquid fuga eum quidem. Sit
                                sint consectetur velit. Quisquam quos quisquam
                                cupiditate. Et nemo qui impedit suscipit alias
                                ea.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="pageContactDetailsSection">
                <div className="container pb-5">
                    <div className="row">
                        {renderContactInformationCards()}
                        {renderContactFormCard()}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
