import React, { Component } from 'react'

class Navbar extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="navbar">
                <div classname="navbar-logo">
                    {require('@/assets/logo.svg')}
                </div>
                {/* actions */}
                {/* revenue-bar */}
                <div className="navbar-menu"></div>
            </div>
        )
    }
}

export default Navbar