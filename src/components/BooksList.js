import React from 'react'
import BookShelf from './BookShelf.js'
import * as booksApi from '../BooksAPI'

class BooksList extends React.Component {
    state = {
        books: [],
        // currentlyReadingBooks: [],
        // readBooks: [],
        // wantToReadBooks: []
    }

    componentDidMount() {
        booksApi.getAll().then((data) => {
            // let currentlyReadingBooks = data.filter(data => data.shelf === 'currentlyReading');
            // let wantToReadBooks = data.filter(data => data.shelf === 'wantToRead')
            // let readBooks = data.filter(data => data.shelf === 'read')
            this.setState({
                books: data
            })
            // currentlyReadingBooks: currentlyReadingBooks,
            //     wantToReadBooks: wantToReadBooks,
            //     readBooks: readBooks
        })
    }

    render() {
        return (<div className="list-books-content">
            <div>
                <BookShelf shelfBooks={this.state.books} shelfName='Currently Reading' />
            </div>
        </div>)
    }


}

export default BooksList
