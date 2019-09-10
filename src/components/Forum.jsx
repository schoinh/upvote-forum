import React, { Component } from 'react';
import Post from './Post';
import PropTypes from 'prop-types';


const Forum = (props) => {
  console.log(props);
  return ( 
   
    <div>
    {props.postList.map(post => 
      <Post 
      title = {post.title}
      bodyText = {post.bodyText} 
      key = {post.id}
      />
    )}
    </div>
   );
}

Forum.PropTypes = {
  postList : PropTypes.array
}
 
export default Forum;