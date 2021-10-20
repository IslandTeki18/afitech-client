import React from "react";
import { Link } from "react-router-dom";
import ProjectListCard from "../../components/projectListCard/ProjectListCard";
import { projectList } from "../../utils/testData";

const ProjectListPage = () => {
    return (
        <div className="dkProjectListPage">
            <section id="projectNavSection" className="py-5">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <button className="btn nav-link">all projects</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn nav-link">
                            one page websites
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="btn nav-link">
                            full stack websites
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className="btn nav-link disabled"
                            tabindex="-1"
                            aria-disabled="true"
                        >
                            mobile apps
                        </button>
                    </li>
                </ul>
            </section>
            <section id="projectListSection" className="py-5">
                <div className="container">
                    <div className="row">
                        {projectList.map((project) => (
                            <div className="col-md-4">
                                <ProjectListCard
                                    image={project.image}
                                    title={project.title}
                                    altImage={project.altImage}
                                    projectType={project.projectType}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectListPage;
