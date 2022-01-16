import React from "react";

export default function Comment(props) {
    return (
        <div>
            Id: {props.comment.id}
            / Comment: {props.comment.comment}
        </div>
    );
}
