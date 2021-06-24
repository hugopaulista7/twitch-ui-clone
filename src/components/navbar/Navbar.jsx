import React, { Component } from 'react'
import {Logo, Actions, SearchBar, User, RevenueBar} from './children'

class Navbar extends Component {

    render() {
        return (
            <div className="navbar">
                <Logo />
                <Actions />
                <SearchBar />
                <div className="endbar">
                    <RevenueBar />
                    <User />
                </div>
                
            </div>
        )
    }
}

export default Navbar