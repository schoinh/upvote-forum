import React from "react";
import PropTypes from "prop-types";
const Post = (props) => {
    return (
        <div>
            <h5>{props.title}</h5>
            <p>{props.bodyText}</p>

        </div>
    );
};

Post.propTypes = {
    title: PropTypes.string,
    bodyText: PropTypes.string
};

export default Post;
