import React, { useEffect } from "react";
import "./AboutPage.scss";
import {
  CheckOurWorkSection,
  ContactFormSection,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { listEmployees } from "../../redux/actions/employee.actions";

const AboutPage = () => {
  const dispatch = useDispatch();
  const employeeList = useSelector((state) => state.employeeList);
  const { loading, error, employees } = employeeList;

  useEffect(() => {
    window.scrollTo(0, "smooth");
    dispatch(listEmployees());
  }, [dispatch]);
  console.log(employees);

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
      
      <CheckOurWorkSection />
      <ContactFormSection />
    </div>
  );
};

export default AboutPage;
