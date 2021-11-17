import React from "react";
import "./BlogDetailsPage.scss";

const BlogDetailsPage = () => {
    // TODO: In the Blog List section change the look of the about column. Make into component, import that component here.
    return (
        <div className="dkBlogDetailsPage">
            <section id="blogContentSection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9" id="blogContentColumn">
                            <img src="" alt="blog-cover" className="blog-img" />
                            <h1 className="blog-title text-center">
                                Hardcoded Title
                            </h1>
                            <div className="row">
                                <div className="col-6 text-left">
                                    Author: AFI TECH
                                </div>
                                <div className="col-6 text-right">
                                    Moment Date Nov. 18, 2021
                                </div>
                            </div>
                            <div className="blog-content">
                                <p>Meat and potatoes</p>
                            </div>
                        </div>
                        <div className="col-lg-3" id="blogAboutMeColumn">
                            {/* AboutMeBlog Column */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetailsPage;
