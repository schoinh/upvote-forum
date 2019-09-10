import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Forum = (props) => {
  const sortPostList = (props) => {
    let postListClone = props.postList.slice();
    postListClone.sort(function (a, b) {
      return (b.upVotes - b.downVotes) - (a.upVotes - a.downVotes);
    });
    return postListClone;
  };

  return (
    <div>
      <Link to="/createPost"><button>New Post</button></Link>
      {sortPostList(props).map(post =>
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
  onDownVote: PropTypes.func
  // sortedPostList: PropTypes.array
};

export default Forum;