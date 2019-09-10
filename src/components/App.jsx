import React from "react";
import { Switch, Route } from "react-router-dom";
import CreatePost from "./CreatePost";
import Forum from "./Forum";
import v4 from 'UUID';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleNewFormPost = this.handleNewFormPost.bind(this);
    this.handleUpVote = this.handleUpVote.bind(this);
    this.state = {
      postList: [{ title: "first post", bodyText: "first post BLAH BLAH BLAH BLAH BLAH BLAH BLAH", id: v4(), score: 0 }]
    };
  }

  handleNewFormPost(newPost) {

    let postListClone = this.state.postList.slice();
    postListClone.push(newPost);
    this.setState({ postList: postListClone });
  }

  getPostFromId(postListClone, idOfPost) {
    for (let i = 0; i < postListClone.length; i++) {
      if (postListClone[i].id == idOfPost) {
        return postListClone[i];
      }
    }
    throw "getPostFromId: Did not find post with given postId";
  }

  handleUpVote(postId) {
    console.log("POST ID: ", postId);
    let postListClone = this.state.postList.slice();
    //console.log(postListClone);
    this.getPostFromId(postListClone, postId).score++;
    //console.log(this.getPostFromId(postListClone, postId));
    this.setState({ postList: postListClone });
  }

  render() {
    return (
      <div>
        <div>
          <h1>Upvote Forum</h1>
          <hr />
        </div>
        <Switch>
          <Route exact path='/createPost' render={() => <CreatePost onNewFormPost={this.handleNewFormPost} />} />
          <Route exact path='/' render={() => <Forum postList={this.state.postList} onUpVote={this.handleUpVote} onDownVote={this.handleDownVote} />} />
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