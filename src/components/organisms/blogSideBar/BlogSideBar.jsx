import React from "react";
import "./BlogSideBar.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { blogTags } from "../../../utils/testData";
import {Image, Paragraph} from "../../atoms"

export const BlogSideBar = (props) => {
  // TODO: User Details Action
  function renderTagButtons() {
    return blogTags.map((item) => (
      <Link
        key={item.id}
        to={`/blogs/tags/${item.id}`}
        className="btn btn-secondary m-1"
      >
        {item.title}
      </Link>
    ));
  }
  return (
    <div className="dkBlogSideBar">
      <div className={`card ${props.className || ""}`}>
        <Image
          src={props.img || "http://placehold.jp/700x500.png"}
          className="card-img-top"
          imgAlt={`profile-${props.img || "about"}`}
        />
        <div className="card-body">
          <h5 className="card-title text-center border-top border-bottom">
            About AFI TECH
          </h5>
          <Paragraph className="card-text">{props.description}</Paragraph>
          <h5 className="card-title text-center border-top border-bottom">
            TAGS
          </h5>
          {renderTagButtons()}
        </div>
      </div>
    </div>
  );
};

BlogSideBar.propTypes = {
  img: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
};