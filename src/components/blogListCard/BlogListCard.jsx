import "./BlogListCard.scss";
import { Link } from "react-router-dom";

const BlogListCard = (props) => {
  // TODO: Make dynamic and reuseable
  function renderBlogType(type) {
    switch (type) {
      case "ReactJS":
        return "primary";
      case "Web Development":
        return "danger";
      default:
        return "secondary";
    }
  }
  return (
    <div className="dkBlogListCard card mb-3">
      <div className="row g-0">
        <div className="col-md-6 d-none d-md-block">
          <img
            src={props.blog.img || "http://placehold.jp/500x300.png"}
            alt={`blog-${props.blog.id}`}
            className="card-img"
          />
        </div>
        <div className="col-md-6 p-2 d-flex align-items-start flex-column">
          <h6 className={`text-${renderBlogType(props.blog.type)}`}>
            {props.blog.type}
          </h6>
          <h3 className="mb-0">{props.blog.title}</h3>
          <p className="text-muted mb-1">{props.blog.createdAt}</p>
          <p className="mb-0 text-line-truncate">
            {props.blog.shortDescription}
          </p>
          <Link
            to={`/blog/${props.blog._id}`}
            className="btn btn-secondary mt-auto continue-btn"
          >
            continue reading
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogListCard;
