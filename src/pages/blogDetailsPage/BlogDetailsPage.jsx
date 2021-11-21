import React, { useEffect } from "react";
import BlogSideBar from "../../components/blogSideBar/BlogSideBar";
import "./BlogDetailsPage.scss";

const BlogDetailsPage = () => {
    // TODO: In the Blog List section change the look of the about column. Make into component, import that component here.
    // TODO: Call the Blog Details Action here
    useEffect(() => {
        window.scrollTo(0, 0, "smooth");
    }, []);
    return (
        <div className="dkBlogDetailsPage">
            <section id="blogContentSection">
                <div className="container">
                    <div className="row pt-3">
                        <div className="col-lg-9" id="blogContentColumn">
                            <img
                                src="https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                alt="blog-cover"
                                className="blog-img"
                            />
                            <h1 className="blog-title text-center">
                                Hardcoded Title
                            </h1>
                            <div className="row pb-3">
                                <div className="col-6 text-start">
                                    Author:{" "}
                                    <span className="text-bold">
                                        Landon McKell
                                    </span>
                                </div>
                                <div className="col-6 text-end">
                                    Moment Date Nov. 18, 2021
                                </div>
                            </div>
                            <div className="blog-content">
                                <p>Meat and potatoes</p>
                            </div>
                        </div>
                        <div className="col-lg-3" id="blogAboutMeColumn">
                            <BlogSideBar />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetailsPage;
