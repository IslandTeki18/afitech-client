import React from "react";
// import { Link } from "react-router-dom";
import ProjectListCard from "../../components/projectListCard/ProjectListCard";
import { projectList } from "../../utils/testData";

const ProjectListPage = () => {
    return (
        <div className="dkProjectListPage">
            <section id="pageTitleSection">
                <div className="container pt-3">
                    <div className="row">
                        <div className="col text-center">
                            <h1>Project List</h1>
                        </div>
                    </div>
                </div>
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
                                    link={project.link}
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
