import React from "react";
import PropTypes from "prop-types";
const Post = (props) => {
  const postStyles = {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "black",
    margin: "10px",
    padding: "10px"
  }

  return (
    <div style={postStyles}>
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
