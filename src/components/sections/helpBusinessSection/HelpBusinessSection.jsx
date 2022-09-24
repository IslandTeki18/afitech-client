import React from 'react'
import PropTypes from "prop-types";

 export const HelpBusinessSection = (props) => {
  return (
    <section id={props.id}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h6 className="text-uppercase">we create ideas</h6>
              <h1 className="text-uppercase">
                how we can help your
                <span className="text-primary ms-2">business</span>
              </h1>
              <p className="text-muted">
                AFI TECH is a web development agency aimed to simplify the web
                development process and provide a simple solution for your
                business that gets the job done.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
            <div className="d-none d-xl-block col-md-5">
              <img
                src="https://via.placeholder.com/500x400"
                alt="placeholder"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

HelpBusinessSection.defaultProps = {
    id: "helpBusinessSection"
}

HelpBusinessSection.propTypes = {
    id: PropTypes.string.isRequired,

}