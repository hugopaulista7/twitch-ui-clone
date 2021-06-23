import React, { Component } from 'react'
import {Logo, Actions, SearchBar} from './children'

class Navbar extends Component {

    render() {
        return (
            <div className="navbar">
                <Logo />
                <Actions />
                <SearchBar />
                {/* revenue-bar */}
                <div className="navbar-menu"></div>
            </div>
        )
    }
}

export default Navbar