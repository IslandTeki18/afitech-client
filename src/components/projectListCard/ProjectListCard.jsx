import React from "react";
import "./ProjectListCard.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectListCard = (props) => {
    function renderProjectTags() {
        return props.projectTags.map((item, idx) => (
            <div className="col" key={idx}>
                <span className="badge rounded-pill bg-secondary">{item}</span>
            </div>
        ));
    }

    return (
        <div className="dkProjectListCard card bg-lightDark">
            <img
                src={props.image}
                className="card-img-top"
                alt={`project-${props.img}`}
            />
            <div className="card-body bg-light">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle">{props.projectType}</h6>
                </div>
                <hr />
                {props.projectTags && (
                    <div className="row pb-4">{renderProjectTags()}</div>
                )}
                <Link to={props.link} className="btn btn-primary text-dark">
                    View Project
                </Link>
            </div>
        </div>
    );
};

ProjectListCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    projectType: PropTypes.string,
    link: PropTypes.string,
};

export default ProjectListCard;
