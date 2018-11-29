import React from 'react'
import Book from './Book'

class BookShelf extends React.Component {
    state = {
        shelfBooks: [],
        shelfName: ''
    }
    componentDidMount() {
        this.setState({
            shelfName: this.props.shelfName,
            shelfBooks: this.props.shelfBooks
        })
    }
    render() {
        return (<div className="bookshelf">
            <h2 className="bookshelf-title">{this.state.shelfName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.state.shelfBooks.map((data) => (
                        <li>
                            <Book bookData={data} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>)
    }

}
export default BookShelf
