import React, { Component } from 'react'

import shrek from './shreeesh.webp'

class User extends Component {
    render() {
        return (
            <div className="user-container">
                <div className="user-round-picture">
                    <img className="round-image" src={shrek} alt="User" />
                    <span className="user-status"></span>
                </div>
            </div>
        )
    }
}

export default User