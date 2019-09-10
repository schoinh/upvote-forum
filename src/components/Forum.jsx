import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Forum = (props) => {

  return (
    <div>
      <Link to="/createPost"><button>New Post</button></Link>
      {props.sortedPostList.map(post =>
        <Post
          title={post.title}
          bodyText={post.bodyText}
          upVotes={post.upVotes}
          downVotes={post.downVotes}
          onUpVote={props.onUpVote}
          onDownVote={props.onDownVote}
          key={post.id}
          postId={post.id}
        />
      )}
    </div>
  );
};

Forum.propTypes = {
  postList: PropTypes.array,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func,
  sortedPostList: PropTypes.array
};

export default Forum;