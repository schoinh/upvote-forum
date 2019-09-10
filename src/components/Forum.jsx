import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Forum = (props) => {
  return (
    <div>
      <Link to="/createPost"><button>New Post</button></Link>
      {props.postList.map(post =>
        <Post
          title={post.title}
          bodyText={post.bodyText}
          key={post.id}
        />
      )}
    </div>
  );
};

Forum.propTypes = {
  postList: PropTypes.array
};

export default Forum;