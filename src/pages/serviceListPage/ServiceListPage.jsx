import React from "react";
import "./ServiceListPage.scss";
import { serviceList } from "../../utils/testData";
import { Link } from "react-router-dom";

const ServiceListPage = () => {
    function serviceListItem() {
        return (
            <>
                {serviceList.map((item, idx) => (
                    <div className="row mb-5" key={idx}>
                        <div className="col-md-7">
                            <img
                                src={item.img}
                                alt={`service-${idx}`}
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-md-5">
                            <h2 className="mb-3">{item.title}</h2>
                            <hr />
                            <p className="text-muted">{item.description}</p>
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
                            <Link
                                className="btn btn-dark mt-4"
                                to={item.projectLink}
                            >
                                See Service
                            </Link>
                        </div>
                    </div>
                ))}
            </>
        );
    }

    return (
        <div className="dkServiceListPage">
            <section
                id="serviceHeroSection"
                className="py-5 text-center text-white bg-dark"
            >
                <h1>We Build Creative Experiences.</h1>
            </section>
            <section id="serviceListSection" className="py-5">
                <div className="container">{serviceListItem()}</div>
            </section>
        </div>
    );
};

export default ServiceListPage;
