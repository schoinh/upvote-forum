import React from "react";
import v4 from "UUID";
import PropTypes from "prop-types";

const CreatePost = (props) => {
  let _title = null;
  let _bodyText = null;


  function handleNewFormPostSubmission(event) {
    event.preventDefault();
    props.onNewFormPost({ title: _title.value, bodyText: _bodyText.value, id: v4() });
    _title.value = "";
    _bodyText.value = "";
    //props. //whatever method we are passing in, pass in variables from form
    //reset form variable values

  }
  //theory: names goes in constructor
  //theory2: names isnt relevant here.
  return (
    <div>
      <form onSubmit={handleNewFormPostSubmission}>
        <input
          ref={(input) => { _title = input; }}
          type="text" />
        <input
          ref={(input) => { _bodyText = input; }}
          type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>);
};

CreatePost.propTypes = {
  onNewFormPost: PropTypes.func
};

export default CreatePost;

//make action the handlermethod we set in app