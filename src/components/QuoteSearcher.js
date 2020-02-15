import React, { Component } from 'react'
import Quotes from "./Quotes"

export default class QuoteSearcher extends Component {
  state = {
    fetching: true,
    quotes: []
  }

  componentDidMount() {
    fetch('https://quote-garden.herokuapp.com/quotes/search/tree')
      .then(res => res.json())
      .then(quoteSearch => {
        // console.log(quoteSearch.results)
        this.setState({
          fetching: false,
          quotes: quoteSearch.results
        })
      })
      .catch(console.error)
  }

  render() {
    if (this.state.fetching) {
      return <div>"Loading..."</div>
    } else if (this.state.error) {
      return <div>"Error"</div>
    } else {
      return (
        <Quotes text={this.state.quotes.map(quoteData => <p>{quoteData.quoteText + " By: " + quoteData.quoteAuthor}</p>)} />
      )
    }
  }
}