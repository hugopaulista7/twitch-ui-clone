import React, { Component } from 'react'
import Icon from './Icon'

class FollowedChannels extends Component {
    render () {
        return (
            <div className="followed-container">
                <div className="followed-header">
                    <span className="followed-section-title">
                        Followed Channels
                    </span>

                    <button className="collapse-button revenue-button">
                        <Icon />
                    </button>
                </div>
            </div>
        )
    }
}

export default FollowedChannels