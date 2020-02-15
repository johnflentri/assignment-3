import React, { Component } from 'react'
import Quotes from "./Quotes"
import QuoteLike from "./QuoteLike"


export default class QuoteSearcher extends Component {
  state = {
    fetching: true,
    quotes: []
  }

  componentDidMount() {
    fetch('https://quote-garden.herokuapp.com/quotes/search/tree')
      .then(res => res.json())
      .then(quoteSearch => {
        console.log("Data arrived!", quoteSearch)
        this.setState({
          fetching: false,
          quotes: quoteSearch.results
        })
      })
      .catch(console.error)
  }

  // changeLike = () => {
  //   console.log("Like clicked")
  //   this.setState({
  //     liked: true
  //   })
  // }

  render() {
    if (this.state.fetching) {
      return <div>"Loading..."</div>
    } else if (this.state.error) {
      return <div>"Error"</div>
    } else {
      return (
        <Quotes text={this.state.quotes.map(quoteData => {
          return (
            <div>
              <ul>
                <li id={quoteData._id}>
                  {quoteData.quoteText + "By: " + quoteData.quoteAuthor}<br></br>
                  <QuoteLike />
                  {<button onClick={this.changeLike}>Like</button>}{<button onClick={this.changeDislike}>Dislike</button>}
                  <br></br>
                </li>
              </ul>
            </div>
          )
        }
        )} />
      )
    }
  }
}
