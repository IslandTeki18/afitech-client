import React from "react";
import PropTypes from "prop-types";

const ProjectListCard = (props) => {
    return (
        <div className="card bg-dark text-white border-0">
            <img src={props.image} className="card-img" alt={props.altImage} />
            <div className="card-img-overlay">
                <h3 className="card-title">{props.title}</h3>
                <h5 className="card-text">{props.projectType}</h5>
            </div>
        </div>
    );
};

ProjectListCard.propTypes = {
    title: PropTypes.string.isRequired,
    altImage: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    projectType: PropTypes.string,
};

export default ProjectListCard;
