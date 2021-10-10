import React from "react";
import "./ListGroupItem.scss";

const ListGroupItem = (props) => {
    return (
        <li
            className="list-group-item"
            style={{
                fontWeight: `${props.isBold ? "bold" : "normal"}`,
                backgroundColor: `${
                    props.bgColor ? `${props.bgColor}` : "unset"
                }`,
                color: `${props.color ? `${props.color}` : "unset"}`,
                border: `${
                    props.isBorder ? `1px solid rgba(0, 0, 0, 0.125)` : "unset"
                }`,
            }}
        >
            {props.children}
        </li>
    );
};

export default ListGroupItem;
