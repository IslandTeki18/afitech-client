import React from "react";
import "./ProjectListCard.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Image, Paragraph } from "../../atoms";

export const ProjectListCard = (props) => {
  function renderProjectTags() {
    return props.projectTags.map((item, idx) => (
      <div className="col" key={idx}>
        <span className="badge rounded-pill bg-secondary">{item}</span>
      </div>
    ));
  }

  return (
    <div className="dkProjectListCard card bg-lightDark">
      <Image
        src={props.image || "http://placehold.jp/500x300.png"}
        className="card-img-top"
        imgAlt={props.title}
      />
      <div className="card-body bg-light">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title d-inline-block text-truncate">
            {props.title}
          </h5>
          <h6 className="card-subtitle text-truncate text-secondary">
            {props.projectType}
          </h6>
        </div>
        <Paragraph className="text-muted multiline-truncate">
          {props.shortDescription}
        </Paragraph>
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
  shortDescription: PropTypes.string,
  projectType: PropTypes.string,
  link: PropTypes.string,
};
