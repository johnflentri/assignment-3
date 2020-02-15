import React, { Component } from 'react'

export default class Quotes extends Component {
  render() {
    return (
      <div><h1>Quotes</h1>
        <ul>
          {this.props.text}
          {this.props.author}
        </ul>
      </div>
    )
  }
}
