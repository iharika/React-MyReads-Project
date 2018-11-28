import React from 'react'
import '../App.css'

class SearchBooks extends React.Component {
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search">Close</button>
                    <div className="search-books-input-wrapper">
                        {}
                        <input type="text" placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks

//TODO: Need to add onClick property to the close button 
