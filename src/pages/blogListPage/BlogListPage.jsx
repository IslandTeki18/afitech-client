import React from "react";
import "./BlogListPage.scss";
import BlogListCard from "../../components/blogListCard/BlogListCard";
import { blogTags } from "../../utils/testData";

const BlogListPage = () => {

    // TODO: Make Blog Test Data
    function renderBlogListCards() {
        return (
            <div className="row">
                <div className="col-12 my-2">
                    <BlogListCard />
                </div>
                <div className="col-12 my-2">
                    <BlogListCard />
                </div>
                <div className="col-12 my-2">
                    <BlogListCard />
                </div>
                <div className="col-12 my-2">
                    <BlogListCard />
                </div>
                <div className="col-12 my-2">
                    <BlogListCard />
                </div>
                <div className="col-12 my-2">
                    <BlogListCard />
                </div>
            </div>
        );
    }
    function renderBlogPostTags() {
        return (
            <div className="row">
                {blogTags.map((item) => (
                    <div className="col p-2" key={item.id}>
                        <button className="btn btn-secondary">
                            {item.title}
                        </button>
                    </div>
                ))}
            </div>
        );
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
                    <div className="row g-2">
                        <div className="col-md-9">{renderBlogListCards()}</div>
                        <div className="col-md-3 ms-auto">
                            <aside className="sidebar">
                                <div className="card card-aside mb-4">
                                    <div className="card-body">
                                        <h4>About</h4>
                                        <p>
                                            Etiam rhoncus. Maecenas tempus,
                                            tellus eget condimentum rhoncus, sem
                                            quam semper libero, sit amet
                                            adipiscing sem neque sed ipsum.
                                        </p>
                                    </div>
                                </div>
                            </aside>
                            <aside className="sidebar sidebar-sticky">
                                <div className="card card-aside mb-3">
                                    <h4>Tags</h4>
                                    {renderBlogPostTags()}
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogListPage;
