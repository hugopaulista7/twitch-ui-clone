import React, { Component } from 'react'
import {Logo} from './children'

class Navbar extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="navbar">
                <Logo />
                {/* actions */}
                {/* revenue-bar */}
                <div className="navbar-menu"></div>
            </div>
        )
    }
}

export default Navbar