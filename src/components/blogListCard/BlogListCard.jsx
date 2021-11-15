import React from "react";
import "./BlogListCard.scss";

const BlogListCard = (props) => {
    // TODO: Make dynamic and reuseable
    return (
        <div className="dkBlogListCard card">
            <div className="row g-0">
                <div className="col-md-7 p-2">
                    <h6 className="text-danger">Type</h6>
                    <h2 className="mb-0">Title</h2>
                    <p className="text-muted mb-1">Nov 12</p>
                    <p className="mb-0">
                        This is a short description of the blog post. This is
                        only meant to be 2 to 3 lines.
                    </p>
                    <button className="btn btn-link text-left">
                        continue reading
                    </button>
                </div>
                <div className="col-md-5 d-none d-md-block">
                    <img
                        src="https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                        alt="blog-1"
                        className="card-img"
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogListCard;
