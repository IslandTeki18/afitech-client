import React from "react";
import "./ProjectListCard.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectListCard = (props) => {
    function renderProjectTags() {
        return props.projectTags.map((item, idx) => (
            <div className="col">
                <span class="badge rounded-pill bg-secondary" key={idx}>
                    {item}
                </span>
            </div>
        ));
    }

    return (
        <div className="dkProjectListCard card">
            <img
                src={props.image}
                className="card-img-top"
                alt={`project-${props.img}`}
            />
            <div className="card-body bg-dark text-white">
                <h5 className="card-title">{props.title}</h5>
                <hr />
                {props.projectTags && (
                    <div className="row pb-4">{renderProjectTags()}</div>
                )}
                <Link to={props.link} className="btn btn-primary">
                    View Project
                </Link>
            </div>
        </div>
    );
};

ProjectListCard.propTypes = {
    title: PropTypes.string.isRequired,
    altImage: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    projectType: PropTypes.string,
    link: PropTypes.string,
};

export default ProjectListCard;
