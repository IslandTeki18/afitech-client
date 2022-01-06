import React, { useEffect } from "react";
import "./AboutPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { listEmployees } from "../../actions/employee.actions";
import Loader from "../../components/loader/Loader";
import AlertBanner from "../../components/alertBanner/AlertBanner";
import ContactForm from "../../components/contactForm/ContactForm";
import TeamMemberCard from "../../components/teamMemberCard/TeamMemberCard";

const AboutPage = () => {
  const dispatch = useDispatch();
  const employeeList = useSelector((state) => state.employeeList);
  const { loading, error, employees } = employeeList;

  useEffect(() => {
    window.scrollTo(0, "smooth");
    dispatch(listEmployees());
  }, [dispatch]);
  console.log(employees);

  function renderEmployeeCards() {
    return employees.map((item, idx) => (
      <div className="col-md-6 col-lg-4" key={idx}>
        <TeamMemberCard
          name={`${item.firstName} ${item.lastName}`}
          position={item.position}
          profileImg={item.image}
          aboutEmployee={item.aboutEmployee}
        />
      </div>
    ));
  }
  return (
    <div className="dkAboutPage">
      <section id="aboutHeaderSection" className="py-5 bg-dark">
        <div className="container text-white">
          <h1 className="display-1">ABOUT AFI TECH</h1>
          <h6 className="text-muted">
            AFI TECH's goal is to deliver fast and reliable web and mobile
            software solutions for companies or individuals.
          </h6>
        </div>
      </section>
      <section id="meetTheTeamSection" className="bg-light">
        <div className="container py-5">
          <h1 className="display-3">Meet the team</h1>
          <div className="row">
            {error && <AlertBanner variant="danger">{error}</AlertBanner>}
            {loading ? <Loader /> : renderEmployeeCards()}
          </div>
        </div>
      </section>
      <section id="callToActionSection" className="py-5 bg-dark">
        <div className="container">
          <div className="row align-items-center text-white">
            <div className="col-lg-7 text-center text-lg-left mb-4">
              <h2>Checkout out work!</h2>
              <p className="text-small mb-0">
                Our goal is to build fast applications, whether for the web or
                for mobile phones. We strive to build solid, fast, and reliable
                applications that make sense for your budget.
              </p>
            </div>
            <div className="col-lg-5 text-center text-lg-right">
              <button className="btn btn-primary">View Services</button>
            </div>
          </div>
        </div>
      </section>
      <section id="contactFormSection" className="py-5 bg-light">
        <div className="container">
          <h1 className="diplay-4">Let's work together!</h1>
          <div className="row align-items-center text-dark">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
