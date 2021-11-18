import React from "react";
import "./BlogListPage.scss";
import BlogListCard from "../../components/blogListCard/BlogListCard";
import BlogSideBar from "../../components/blogSideBar/BlogSideBar";
import { blogList } from "../../utils/testData";

const BlogListPage = () => {
    // TODO: Make Blog Test Data
    // TODO: Blog List Action
    function renderBlogListCards() {
        return blogList.map((item) => (
            <BlogListCard key={item.id} blog={item} />
        ));
    }
    return (
        <div className="dkBlogListPage">
            <section id="heroSection" className="py-5 bg-dark">
                <div className="container text-center text-white">
                    <h1 className="display-2 text-uppercase">Blog List</h1>
                    <p>
                        "The Advance Level is Mastery of the Basics" - Ray
                        Manchini
                    </p>
                </div>
            </section>
            <section id="blogListSection" className="py-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">{renderBlogListCards()}</div>
                        <div className="col-md-3 ms-auto">
                            <BlogSideBar />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogListPage;
