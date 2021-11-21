import React, { useEffect } from "react";
import "./ProjectDetailsPage.scss";
import Carousel from "../../components/carousel/Carousel";
import Icon from "../../components/icon/Icon";
import { Link } from "react-router-dom";

const ProjectDetailsPage = () => {
    // Redux Project Details API Call
    useEffect(() => {
        window.scrollTo(0, 0, "smooth");
    }, []);

    return (
        <div className="dkProjectDetailsPage">
            <section id="pageHeaderSection" className="my-5">
                <div className="container">
                    <h1>Project Title</h1>
                </div>
            </section>
            <section id="projectDetailsSection" className="mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <Carousel />
                        </div>
                        <div className="col-md-4">
                            <div
                                id="projectInformationCard"
                                className="card mb-3"
                            >
                                <div className="card-body">
                                    <h3>Project Title</h3>
                                    <hr />
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <strong className="me-2">
                                                Category:
                                            </strong>
                                            props.category
                                        </li>
                                        <li className="list-group-item">
                                            <strong className="me-2">
                                                Client:
                                            </strong>
                                            props.client
                                        </li>
                                        <li className="list-group-item">
                                            <strong className="me-2">
                                                Project Date:
                                            </strong>
                                            props.project_created
                                        </li>
                                        <li className="list-group-item">
                                            <strong className="me-2">
                                                Project URL:
                                            </strong>
                                            props.project_url
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="projectDescription">
                                <h3>Description: </h3>
                                <p className="text-muted ps-2">
                                    props.description
                                    <br />
                                    <br />
                                    Autem ipsum nam porro corporis rerum. Quis
                                    eos dolorem eos itaque inventore commodi
                                    labore quia quia. Exercitationem repudiandae
                                    officiis neque suscipit non officia eaque
                                    itaque enim. Voluptatem officia accusantium
                                    nesciunt est omnis tempora consectetur
                                    dignissimos. Sequi nulla at esse enim cum
                                    deserunt eius.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="pageNavigationSection">
                <div className="container-fluid">
                    <hr />
                    <div className="d-flex justify-content-between align-items-center py-3">
                        <button className="btn btn-link text-reset text-decoration-none d-flex align-items-center">
                            <Icon
                                icon="long-arrow-alt-left"
                                iconStyle="fas"
                                size="28"
                                color="#3c3c3c"
                                marginRight="10"
                            />
                            prev
                        </button>
                        <Link
                            to="/projects"
                            className="btn btn-secondary circle-btn"
                        >
                            all
                        </Link>
                        <button className="btn btn-link text-reset text-decoration-none d-flex align-items-center">
                            next
                            <Icon
                                icon="long-arrow-alt-right"
                                iconStyle="fas"
                                size="28"
                                color="#3c3c3c"
                                marginLeft="10"
                            />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetailsPage;
