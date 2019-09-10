import React from "react";
import PropTypes from "prop-types";
const Post = (props) => {
  const postStyles = {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "black",
    margin: "10px",
    padding: "10px"
  };
  function handleTheOnClick() {
    props.onUpVote(props.postId)
  }
  return (
    <div style={postStyles}>
      <h3>{props.title}</h3>
      <p>{props.bodyText}</p>
      <p>{props.score}</p>
      <button onClick={handleTheOnClick}>↑</button>
      <button onClick={props.onDownVote}>↓</button>
    </div>
  );
};



Post.propTypes = {
  title: PropTypes.string,
  bodyText: PropTypes.string,
  score: PropTypes.number,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func,
  postId: PropTypes.string
};

export default Post;
