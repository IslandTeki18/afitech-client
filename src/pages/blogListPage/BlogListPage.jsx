import React, { useEffect } from "react";
import "./BlogListPage.scss";
import {
  Loader,
  BlogListCard,
  BlogSideBar,
  AlertBanner,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { listBlogs } from "../../redux/actions/blog.actions";

const BlogListPage = () => {
  const dispatch = useDispatch();
  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;

  useEffect(() => {
    window.scrollTo(0, "smooth");
    dispatch(listBlogs());
  }, [dispatch]);
  function renderBlogListCards() {
    return blogs.map((item, idx) => <BlogListCard key={idx} blog={item} />);
  }
  return (
    <div className="dkBlogListPage">
      <section id="heroSection" className="py-5 bg-dark">
        <div className="container text-center text-white">
          <h1 className="display-2 text-uppercase">Blog List</h1>
          <p>"The Advance Level is Mastery of the Basics" - Ray Manchini</p>
        </div>
      </section>
      <section id="blogListSection" className="py-2 bg-dark">
        <div className="container">
          {error && <AlertBanner variant="danger">{error}</AlertBanner>}
          <div className="row">
            <div className="col-md-9">
              {loading ? <Loader /> : renderBlogListCards()}
            </div>
            <div className="col-md-3 ms-auto">
              <BlogSideBar description="AFI TECH not only builds websites and apps but also strives to build the community." />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogListPage;
