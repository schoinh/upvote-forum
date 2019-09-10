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

  return (
    <div style={postStyles}>
      <h3>{props.title}</h3>
      <p>{props.bodyText}</p>
      <button onClick={() => { props.onUpVote(props.postId); }}>↑ {props.upVotes}</button>
      <button onClick={() => { props.onDownVote(props.postId); }}>↓ {props.downVotes}</button>
    </div >
  );
};

Post.propTypes = {
  title: PropTypes.string,
  bodyText: PropTypes.string,
  upVotes: PropTypes.number,
  downVotes: PropTypes.number,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func,
  postId: PropTypes.string
};

export default Post;
