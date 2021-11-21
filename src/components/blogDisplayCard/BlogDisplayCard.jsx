import React from "react";
import "./BlogDisplayCard.scss";
import PropTypes from "prop-types";
import Icon from "../icon/Icon";
import { Link } from "react-router-dom";

const BlogDisplayCard = (props) => {
    return (
        <div className="dkBlogDisplayCard card border-0 bg-dark">
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={props.img}
                        className="img-fluid rounded-start"
                        alt={props.altImg}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body text-white">
                        <p className="card-text">
                            <small className="text-muted">
                                {props.datePublished}
                            </small>
                        </p>
                        <h4 className="card-title fw-bold">{props.title}</h4>
                        <Link
                            to={props.link}
                            className="btn text-white d-flex justify-content-start align-items-center"
                        >
                            read more
                            <Icon
                                iconStyle="fas"
                                icon="long-arrow-alt-right"
                                color="#ffffff"
                                size="30"
                                marginLeft="15"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

BlogDisplayCard.propTypes = {
    img: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    datePublished: PropTypes.string.isRequired,
};

export default BlogDisplayCard;
