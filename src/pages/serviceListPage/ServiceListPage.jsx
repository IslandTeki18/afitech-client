import React from "react";
import "./ServiceListPage.scss";

const ServiceListPage = () => {
    return (
        <div className="dkServiceListPage">
            <section
                id="serviceHeroSection"
                className="py-5 text-center text-white bg-dark"
            >
                <h1>We Build Creative Experiences.</h1>
            </section>
            <section id="serviceListSection" className="py-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-7">
                            <img
                                src="https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                alt="service-1"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-md-5">
                            <h2 className="mb-3">Full Stack Applications</h2>
                            <hr />
                            <p className="text-muted">
                                This is just a title description of the service
                                that we provide
                            </p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">
                                    A second item
                                </li>
                                <li className="list-group-item">
                                    A third item
                                </li>
                                <li className="list-group-item">
                                    A fourth item
                                </li>
                                <li className="list-group-item">
                                    And a fifth one
                                </li>
                            </ul>
                            <button className="btn btn-dark mt-4">
                                See Service
                            </button>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-5">
                            <h2 className="mb-3">One Page Websites</h2>
                            <hr />
                            <p className="text-muted">
                                This is just a title description of the service
                                that we provide
                            </p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">
                                    A second item
                                </li>
                                <li className="list-group-item">
                                    A third item
                                </li>
                                <li className="list-group-item">
                                    A fourth item
                                </li>
                                <li className="list-group-item">
                                    And a fifth one
                                </li>
                            </ul>
                            <button className="btn btn-dark mt-4">
                                See Service
                            </button>
                        </div>
                        <div className="col-md-7">
                            <img
                                src="https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                alt="service-1"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-7">
                            <img
                                src="https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                alt="service-1"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-md-5">
                            <h2 className="mb-3">Mobile Applications</h2>
                            <hr />
                            <p className="text-muted">
                                This is just a title description of the service
                                that we provide
                            </p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">
                                    A second item
                                </li>
                                <li className="list-group-item">
                                    A third item
                                </li>
                                <li className="list-group-item">
                                    A fourth item
                                </li>
                                <li className="list-group-item">
                                    And a fifth one
                                </li>
                            </ul>
                            <button className="btn btn-dark mt-4">
                                See Service
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceListPage;
