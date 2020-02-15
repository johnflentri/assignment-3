import React, { Component } from 'react'

export default class Quotes extends Component {
  state = {
    liked: null
  }

  changeLike = () => {
    console.log("Like clicked")
    this.setState({
      liked: true
    })
  }

  changeDislike = () => {
    console.log("Dislike clicked")
    this.props.changeDislike()
    this.setState({
      liked: false
    })
  }

  render() {
    return (
      <div><h1>Quotes</h1>
        {this.props.text}
      </div>
    )
  }
}

// I got really stuck trying to assign the button to the state for each quote, 
// I tried to create the QuoteLike.js component but didn't really know where to go from there