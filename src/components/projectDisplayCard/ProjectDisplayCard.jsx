import React from "react";
import "./ProjectDisplayCard.scss";
import PropTypes from "prop-types";

const ProjectDisplayCard = (props) => {
    return (
        <div className="dkProjectDisplayCard card border-0">
            <img
                src="https://images.unsplash.com/photo-1546900703-cf06143d1239?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2650&q=80"
                className="card-img-top"
                alt="project-display"
            />
            <div className="card-body">
                <h5 className="card-title">Project Title</h5>
                <p className="card-text">
                    This is just a short description of the project, this will generally be a few lines detailing the more import features of the project
                </p>
                <a href="#" className="btn btn-secondary text-uppercase">
                    View Details
                </a>
            </div>
        </div>
    );
};

ProjectDisplayCard.propTypes = {};

export default ProjectDisplayCard;
