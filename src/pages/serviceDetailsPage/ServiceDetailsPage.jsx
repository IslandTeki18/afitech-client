import React, { useEffect } from "react";
import "./ServiceDetailsPage.scss";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailService } from "../../redux/actions/service.actions";
import { listProjects } from "../../redux/actions/project.actions";
import { Loader, Icon, ProjectListCard, AlertBanner } from "../../components";

const ServiceDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const serviceDetails = useSelector((state) => state.serviceDetails);
  const { loading, error, service } = serviceDetails;
  const projectList = useSelector((state) => state.projectList);
  const {
    loading: projectLoading,
    error: projectError,
    projects,
  } = projectList;

  useEffect(() => {
    window.scrollTo(0, 0, "smooth");
    dispatch(detailService(id));
    dispatch(listProjects());
  }, [dispatch, id]);
  console.log(service);

  function serviceFeatureCards() {
    return (
      <div className="row">
        {error && <AlertBanner variant="danger">{error}</AlertBanner>}
        {loading ? (
          <Loader />
        ) : (
          service.serviceFeatures &&
          service.serviceFeatures.map((item, idx) => (
            <div className="col-sm-12 col-lg-6 mb-3" key={idx}>
              <h4 className="me-3">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))
        )}
      </div>
    );
  }

  function renderProjectListCards() {
    return projects
      .filter((project) => project.serviceType === service.type)
      .map((item, idx) => (
        <div className="col-sm-6 col-md-4 mb-2" key={idx}>
          <ProjectListCard
            title={item.title}
            image={item.image}
            projectType={item.projectDisplayType}
            link={item.link}
            projectTags={item.projectTags}
          />
        </div>
      ));
  }
  if (!service) {
    return <Loader />
  }
  return (
    <div className="dkServiceDetailsPage">
      <section id="serviceHeaderSection" className="py-5">
        <div className="container text-center py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-2">{service.title}</h1>
              <p className="text-muted">{service.shortDescription}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="serviceDetailsCoverPhotoSection" className="pb-5">
        <img
          src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2698&q=80"
          alt="service-1"
          className="img-cover"
        />
      </section>
      <section id="serviceDetailsSection" className="py-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row pb-5">
                <div className="col-8">
                  <h3>
                    When in doubt, use a main thesis statement of the service
                    right here
                  </h3>
                </div>
              </div>
              {serviceFeatureCards()}
            </div>
          </div>
        </div>
      </section>
      <section id="relatedProjectsSection">
        <div className="container-fluid">
          <div className="row">
            {projectError && (
              <AlertBanner variant="danger">{projectError}</AlertBanner>
            )}
            {projectLoading ? <Loader /> : renderProjectListCards()}
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
            <Link to="/services" className="btn btn-secondary circle-btn">
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

export default ServiceDetailsPage;
