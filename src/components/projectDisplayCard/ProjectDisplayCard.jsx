import React from "react";
import "./ProjectDisplayCard.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectDisplayCard = (props) => {
    return (
        <div className="dkProjectDisplayCard card border-0">
            <img
                src={props.projectImg}
                className="card-img-top project-img"
                alt={props.imgAlt}
            />
            <div className="card-body">
                <h5 className="card-title">{props.projectTitle}</h5>
                <p className="card-text line-clamp information-body">
                    {props.shortDescription}
                </p>
                <Link
                    to={`${props.link}`}
                    className="btn btn-secondary text-uppercase"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

ProjectDisplayCard.propTypes = {
    projectTitle: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    projectImg: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
};

export default ProjectDisplayCard;
