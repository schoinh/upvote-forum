import React, { Component } from 'react';
import PropTypes from 'prop-types';
const Post = (props) => {
    return ( 
        <div>
            <h5>{props.title}</h5>
            <p>{props.bodyText}</p>
            
        </div>
     );
}

Post.proptypes = {
    title : PropTypes.string,
    text : PropTypes.string
}
 
export default Post;
