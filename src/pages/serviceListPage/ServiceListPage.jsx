import React, { useEffect } from "react";
import "./ServiceListPage.scss";
import { serviceList } from "../../utils/testData";
import { Link } from "react-router-dom";

const ServiceListPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0, "smooth");
    }, []);
    function serviceListItem() {
        return (
            <>
                {serviceList.map((item, idx) => (
                    <div className="row mb-5" key={idx}>
                        <div className="col-sm-12 col-lg-7">
                            <img
                                src={item.img}
                                alt={`service-${idx}`}
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-sm-12 col-lg-5">
                            <h2 className="mb-3">{item.title}</h2>
                            <hr />
                            <p className="text-muted">{item.description}</p>
                            <ul className="list-group list-group-flush">
                                {item.serviceFeatures.map((subItem, idx) => (
                                    <li className="list-group-item" key={idx}>
                                        {subItem}
                                    </li>
                                ))}
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
