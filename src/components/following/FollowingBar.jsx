import React, { Component } from 'react'
import { FollowedChannels } from './children'

class FollowingBar extends Component {
    render() {
        return (
            <div className="follow-bar">
                <FollowedChannels />
            </div>
            // online friends
            // search friends

        )
    }
}

export default FollowingBar