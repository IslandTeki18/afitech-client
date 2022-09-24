import React, { useEffect } from "react";
import { listProjects } from "../../redux/actions/project.actions";
import { useDispatch, useSelector } from "react-redux";
import { Loader, ProjectListCard, AlertBanner } from "../../components";

const ProjectListPage = () => {
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.projectList);
  const { loading, error, projects } = projectList;

  useEffect(() => {
    window.scrollTo(0, "smooth");
    dispatch(listProjects());
  }, [dispatch]);
  return (
    <div className="dkProjectListPage bg-dark">
      <section id="pageTitleSection">
        <div className="container pt-3">
          <div className="text-center text-light">
            <h1>Project List</h1>
          </div>
        </div>
      </section>
      <section id="projectListSection" className="py-lg-5">
        <div className="container">
          <div className="row">
            {error && <AlertBanner variant="danger">{error}</AlertBanner>}
            {loading ? (
              <Loader />
            ) : (
              projects
                .filter((project) => project.isPublished)
                .map((project, idx) => (
                  <div className="mt-2 col-md-6 col-lg-4" key={idx}>
                    <ProjectListCard
                      image={project.image}
                      title={project.title}
                      projectType={project.projectType}
                      shortDescription={project.shortDescription}
                      link={`/project/${project._id}`}
                      projectTags={project.projectTags}
                    />
                  </div>
                ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectListPage;
