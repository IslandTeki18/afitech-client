import React, { useEffect } from "react";
import "./BlogDetailsPage.scss";
import { BlogSideBar, Loader, AlertBanner } from "../../components";
import parse from "html-react-parser";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailBlog } from "../../redux/actions/blog.actions";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blogDetails = useSelector((state) => state.blogDetails);
  const { loading, error, blog } = blogDetails;
  useEffect(() => {
    window.scrollTo(0, "smooth");
    dispatch(detailBlog(id));
  }, [dispatch, id]);
  return (
    <div className="dkBlogDetailsPage">
      <section id="blogContentSection">
        <div className="container">
          <Link to="/blogs" className="btn btn-secondary mt-2">
            back
          </Link>
          <div className="row pt-3">
            {error && <AlertBanner variant="danger">{error}</AlertBanner>}
            {loading ? (
              <div className="col-lg-9 d-flex justify-content-center">
                <Loader />
              </div>
            ) : (
              <div className="col-lg-9" id="blogContentColumn">
                <img
                  src="https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  alt="blog-cover"
                  className="blog-img"
                />
                <h1 className="blog-title text-center">{blog.title}</h1>
                <div className="row pb-3">
                  <div className="col-6 text-start">
                    Author: <span className="text-bold">Landon McKell</span>
                  </div>
                  <div className="col-6 text-end">{blog.createdAt}</div>
                </div>
                <div className="blog-content">
                  <p>{parse(`${blog.content}`)}</p>
                </div>
              </div>
            )}
            <div className="col-lg-3" id="blogAboutMeColumn">
              <BlogSideBar description="AFI TECH not only builds websites and apps but also strives to build the community." />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailsPage;
