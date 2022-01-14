import React from "react";
import "./BlogSideBar.scss";
import { Link } from "react-router-dom";
import { blogTags } from "../../../utils/testData";
import PropTypes from "prop-types";

const BlogSideBar = (props) => {
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
                <img
                    src={props.img || "http://placehold.jp/700x500.png"}
                    className="card-img-top"
                    alt={`profile-${props.img || "about"}`}
                />
                <div className="card-body">
                    <h5 className="card-title text-center border-top border-bottom">
                        About AFI TECH
                    </h5>
                    <p className="card-text">{props.description}</p>
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

export default BlogSideBar;
