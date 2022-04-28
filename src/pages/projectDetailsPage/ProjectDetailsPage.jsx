import React, { useEffect } from "react";
import "./ProjectDetailsPage.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailProject } from "../../redux/actions/project.actions";
import Carousel from "../../components/molecules/carousel/Carousel";
import Icon from "../../components/atoms/icon/Icon";
import Loader from "../../components/atoms/loader/Loader";
import AlertBanner from "../../components/molecules/alertBanner/AlertBanner";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const projectDetails = useSelector((state) => state.projectDetails);
  const { loading, error, project } = projectDetails;
  useEffect(() => {
    window.scrollTo(0, 0, "smooth");
    dispatch(detailProject(id));
  }, [dispatch, id]);

  return (
    <div className="dkProjectDetailsPage">
      {error && <AlertBanner variant="danger">{error}</AlertBanner>}
      {loading ? (
        <div className="d-flex justify-content-center align-items-center py-5">
          <Loader />
        </div>
      ) : (
        <>
          <section id="pageHeaderSection" className="my-5">
            <div className="container">
              <h1>{project.title}</h1>
            </div>
          </section>
          <section id="projectDetailsSection" className="mb-5">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <Carousel />
                </div>
                <div className="col-md-4">
                  <div id="projectInformationCard" className="card mb-3">
                    <div className="card-body">
                      <h3>{project.title}</h3>
                      <hr />
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <strong className="me-2">Type:</strong>
                          {project.projectType}
                        </li>
                        <li className="list-group-item">
                          <strong className="me-2">Client:</strong>
                          {project.client || "Null"}
                        </li>
                        <li className="list-group-item">
                          <strong className="me-2">Project Date:</strong>
                          {project.createdAt || "Null"}
                        </li>
                        <li className="list-group-item">
                          <strong className="me-2">Project URL:</strong>
                          <a
                            href={
                              "https://stackoverflow.com/questions/64092771/external-link-with-react"
                            }
                            rel="noreferrer noopener"
                            target="_blank"
                          >
                            {project.projectUrl}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div id="projectDescription">
                    <h3>Description: </h3>
                    <p className="text-muted ps-2">{project.longDescription}</p>
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
                <Link to="/projects" className="btn btn-secondary circle-btn">
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
        </>
      )}
    </div>
  );
};

export default ProjectDetailsPage;
