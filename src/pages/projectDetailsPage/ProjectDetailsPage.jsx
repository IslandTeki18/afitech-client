import React from "react";
import "./ProjectDetailsPage.scss";
import Carousel from "../../components/carousel/Carousel";

const ProjectDetailsPage = () => {
    return (
        <div className="dkProjectDetailsPage">
            <section id="pageHeaderSection" className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Project Title</h1>
                        </div>
                    </div>
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
        </div>
    );
};

export default ProjectDetailsPage;
