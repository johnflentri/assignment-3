import React from "react";
export default class LikeCounter extends React.Component {
  state = {
    numLikes: 0,
    numDislikes: 0
  };
  incrementLikes = () => {
    this.setState({
      numLikes: this.state.numLikes + 1
    });
  };
  decrementLikes = () => {
    this.setState({
      numLikes: this.state.numLikes - 1
    });
  };
  incrementDislikes = () => {
    this.setState({
      numDislikes: this.state.numDislikes + 1
    });
  };
  decrementDislikes = () => {
    this.setState({
      numDislikes: this.state.numDislikes - 1
    });
  };
  render() {
    return (
      <div>
        <p>Likes <b>{this.state.numLikes}</b> / Disliked <b>{this.state.numDislikes}</b></p>
        <button onClick={this.incrementLikes}>Like</button><button onClick={this.decrementLikes}>Dislike</button>
        <button onClick={this.incrementDislikes}>Like</button><button onClick={this.decrementDislikes}>Dislike</button>
      </div>
    );
  }
}