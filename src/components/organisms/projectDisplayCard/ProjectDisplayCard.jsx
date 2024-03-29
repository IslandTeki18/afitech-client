import React from "react";
import "./ProjectDisplayCard.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Image, Paragraph } from "../../atoms";

export const ProjectDisplayCard = (props) => {
  return (
    <div className="dkProjectDisplayCard card border-0">
      <Image
        src={props.projectImg}
        className="card-img-top project-img"
        imgAlt={props.projectTitle}
      />
      <div className="card-body">
        <h5 className="card-title">{props.projectTitle}</h5>
        <Paragraph className="card-text line-clamp information-body">
          {props.shortDescription}
        </Paragraph>
        <Link to={props.link} className="btn btn-secondary text-uppercase">
          View Details
        </Link>
      </div>
    </div>
  );
};

ProjectDisplayCard.defaultProps = {
  projectImg: "http://placehold.jp/500x300.png",
};

ProjectDisplayCard.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  projectImg: PropTypes.string.isRequired,
};
