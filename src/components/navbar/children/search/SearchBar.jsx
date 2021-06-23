import React, { Component } from 'react'
import SearchIcon from './SearchIcon'

class SearchBar extends Component {
  render() {
      return (
        <div className="search-bar-container">
            <div className="form-group">
                <input type="text" placeholder="Search" className="search-input" />
                <button className="search-button">
                    <SearchIcon />
                </button>
            </div>
        </div>
      )
  }
}

export default SearchBar
