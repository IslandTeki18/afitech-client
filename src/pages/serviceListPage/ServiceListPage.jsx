import React, { useEffect } from "react";
import "./ServiceListPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { listServices } from "../../redux/actions/service.actions";
import { Link } from "react-router-dom";
import { Loader, AlertBanner } from "../../components";

const ServiceListPage = () => {
  const dispatch = useDispatch();
  const serviceList = useSelector((state) => state.serviceList);
  const { loading, error, services } = serviceList;

  useEffect(() => {
    window.scrollTo(0, 0, "smooth");
    dispatch(listServices());
  }, [dispatch]);

  function serviceListItem() {
    if (!services.isAvailable) return renderNoServices();
    return services
      .filter((service) => service.isAvailable)
      .map((item, idx) => (
        <div className="row mb-5" key={idx}>
          <div className="col-sm-12 col-lg-7">
            <img
              src={item.img || "http://placehold.jp/500x300.png"}
              alt={item.title}
              className="img-fluid"
            />
          </div>
          <div className="col-sm-12 col-lg-5">
            <h2 className="mb-3">{item.title}</h2>
            <hr />
            <p className="text-muted">{item.shortDescription}</p>
            <ul className="list-group list-group-flush">
              {item.serviceFeatures ? (
                item.serviceFeatures.map((subItem, idx) => (
                  <li className="list-group-item" key={idx}>
                    {subItem.title}
                  </li>
                ))
              ) : (
                <li className="list-group-item">
                  <p>There are no service features.</p>
                </li>
              )}
            </ul>
            <Link className="btn btn-dark mt-4" to={`/service/${item._id}`}>
              See Service
            </Link>
          </div>
        </div>
      ));
  }

  function renderNoServices() {
    return (
      <div className="py-5">
        <h2 className="text-center py-5">
          We are not currently running any services that are available at this moment...
        </h2>
      </div>
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
        <div className="container">
          {error && <AlertBanner variant="danger">{error}</AlertBanner>}
          {loading ? <Loader /> : serviceListItem()}
        </div>
      </section>
    </div>
  );
};

export default ServiceListPage;
