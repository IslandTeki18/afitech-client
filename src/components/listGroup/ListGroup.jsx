import "./ListGroup.scss";

const ListGroup = (props) => {
    return (
        <ul className={`list-group${props.isFlush ? " list-group-flush" : ""}`}>
            {props.children}
        </ul>
    );
};

export default ListGroup;
