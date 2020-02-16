import React, { Component } from 'react'
import LikeCounter from './LikeCounter';

export default class Quotes extends Component {
  state = {
    liked: null,
    value: null
  }

  // changeLike = () => {
  //   console.log("Like clicked")
  //   this.setState({
  //     liked: true
  //   })
  // }

  changeDislike = () => {
    console.log("Dislike clicked")
    this.props.changeDislike()
    this.setState({
      liked: false
    })
  }

  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div><h1>Quotes</h1>
        <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Search!" />
        </form>
        <LikeCounter />
        <br></br>
        <ul>
          {this.props.text}
          {/* {this.state.liked} */}
        </ul>
      </div>
    )
  }
}

// I got really stuck trying to assign the button to the state for each quote, 
// I tried to create the QuoteLike.js component but didn't really know where to go from there