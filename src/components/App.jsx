import React from "react";
import { Switch, Route } from "react-router-dom";
import CreatePost from "./CreatePost";
import Forum from "./Forum";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewFormPost = this.handleNewFormPost.bind(this);
    this.state = {
      postList: []
    };
  }

  handleNewFormPost(newPost) {
    let postListClone = this.state.postList.slice();
    postListClone.push(newPost);
    this.setState({ postList: postListClone });
  }

  render() {
    return (
      <div>
        <div>
          Upvote Forum
          <hr />
        </div>
        <Switch>
          <Route exact path='/createPost' render={() => <CreatePost onNewFormPost={this.handleNewFormPost} />} />
          <Route exact path='/' render={() => <Forum postList={this.state.postList} />} />
        </Switch>
      </div>
    );
  }
}

// Ticket.propTypes = {
//   names: PropTypes.string,
//   location: PropTypes.string,
//   issue: PropTypes.string
// };

export default App;