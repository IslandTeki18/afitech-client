import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import ProjectListCard from "../../components/projectListCard/ProjectListCard";
import { projectList } from "../../utils/testData";

const ProjectListPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0, "smooth");
    }, []);
    return (
        <div className="dkProjectListPage">
            <section id="pageTitleSection">
                <div className="container pt-3">
                    <div className="text-center">
                        <h1>Project List</h1>
                    </div>
                </div>
            </section>
            <section id="projectListSection" className="py-lg-5">
                <div className="container">
                    <div className="row">
                        {projectList.map((project, idx) => (
                            <div className="mt-2 col-md-6 col-lg-4" key={idx}>
                                <ProjectListCard
                                    image={project.image}
                                    title={project.title}
                                    projectType={project.projectDisplayType}
                                    link={project.link}
                                    projectTags={project.projectTags}
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
