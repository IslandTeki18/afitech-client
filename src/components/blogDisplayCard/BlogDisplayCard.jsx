import React from "react";
import "./BlogDisplayCard.scss"
import PropTypes from "prop-types";

const BlogDisplayCard = (props) => {
    return (
        <div className="dkBlogDisplayCard card border-0">
            <img src={props.img} className="card-img-top custom-img" alt={props.imgAlt} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text text-truncate">{props.description}</p>
                <p className="card-text">
                    <small className="text-muted">
                        Last updated 3 mins ago
                    </small>
                </p>
            </div>
        </div>
    );
};

BlogDisplayCard.propTypes = {
    img: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default BlogDisplayCard;
