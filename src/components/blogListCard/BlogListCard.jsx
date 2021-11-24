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
                <div className="col-md-7 p-2">
                    <h6 className={`text-${renderBlogType(props.blog.type)}`}>
                        {props.blog.type}
                    </h6>
                    <h2 className="mb-0">{props.blog.title}</h2>
                    <p className="text-muted mb-1">Nov 12</p>
                    <p className="mb-0 text-line-truncate">
                        {props.blog.description}
                    </p>
                    <Link
                        to={`/blogs/${props.blog.id}`}
                        className="btn btn-secondary text-left"
                    >
                        continue reading
                    </Link>
                </div>
                <div className="col-md-5 d-none d-md-block">
                    <img
                        src={props.blog.img}
                        alt={`blog-${props.blog.id}`}
                        className="card-img"
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogListCard;
