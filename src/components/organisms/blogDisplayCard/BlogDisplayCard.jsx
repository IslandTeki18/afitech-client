import React from "react";
import "./BlogDisplayCard.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Paragraph, Image, Icon } from "../../atoms";

export const BlogDisplayCard = (props) => {
  return (
    <div className="dkBlogDisplayCard card border-0 bg-dark">
      <div className="row g-0">
        <div className="col-md-4">
          <Image
            src={props.img}
            className="img-fluid rounded-start"
            imgAlt={props.title}
            width={500}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body text-white">
            <Paragraph className="card-text">
              <small className="text-muted">{props.datePublished}</small>
            </Paragraph>
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
                paddingLeft="15"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogDisplayCard.defaultProps = {
  img: "http://placehold.jp/500x300.png",
};

BlogDisplayCard.propTypes = {
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  datePublished: PropTypes.string.isRequired,
};
