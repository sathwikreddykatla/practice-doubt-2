// Write your React code here.
import {Component} from 'react'

import EmojiItem from '../EmojiItem'

import './index.css'

class Feedback extends Component {
  state = {status: true}

  changeStatus = () => {
    this.setState({status: false})
  }

  render() {
    const {status} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const feedbackPage = (
      <div>
        <h1>How satisfied are you with our customer support performance?</h1>
        <ul className="feedback-container">
          {emojis.map(each => (
            <EmojiItem
              eachItem={each}
              key={each.id}
              changeStatus={this.changeStatus}
            />
          ))}
        </ul>
      </div>
    )
    const thankyouPage = (
      <div className="thankyou-card">
        <img src={loveEmojiUrl} className="love-emoji" alt="love emoji" />
        <h1>Thank You</h1>
        <p>
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
    return (
      <div className="background">
        <div className="card">{status ? feedbackPage : thankyouPage}</div>
      </div>
    )
  }
}

export default Feedback
