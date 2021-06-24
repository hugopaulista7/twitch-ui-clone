import React, { Component } from 'react'
import {Messages, Prime, Bits, Inbox} from './icons'

class RevenueBar extends Component {
  render() {
    return (
      <div className='revenue-container'>
        <button className="revenue-button">
            <Prime />
        </button>
        <button className="revenue-button">
            <Inbox />
        </button>
        <button className="revenue-button">
            <Messages />
        </button>
        <button className="revenue-button bits-button">
            <Bits />
            <span className="bits-text">
                Get Bits
            </span>
        </button>
      </div>
    )
  }
}

export default RevenueBar
