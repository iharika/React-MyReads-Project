import React from 'react';
import BookShelf from './BookShelf.js';

class BooksList extends React.Component {
  // loadData() {
  // 	var promise = new Promise((resolve, reject) => {
  // 		booksApi.getAll().then(data => {
  // 			resolve(data);
  // 		});
  // 	});
  // 	return promise;
  // }
  // renderData() {
  // 	booksApi.getAll().then(data => {
  // 		this.setState({
  // 			books: data
  // 		});
  // 	});
  // }
  // moveBookToShelf(bookToMove, shelfToMove) {
  // 	booksApi.update(bookToMove, shelfToMove).then(() => {
  // 		this.renderData()
  // 	})
  // }
  // componentDidMount() {
  // 	this.renderData();
  // }
  render() {
    const books = this.props.books;
    return (
      <div className="list-books-content">
        <div>
          <BookShelf
            shelfBooks={books.filter(book => book.shelf === 'currentlyReading')}
            shelfName="Currently Reading"
            onMoveBookToShelf={this.props.onChange}
          />
          <BookShelf
            shelfBooks={books.filter(book => book.shelf === 'read')}
            shelfName="Read"
            onMoveBookToShelf={this.props.onChange}
          />
          <BookShelf
            shelfBooks={books.filter(book => book.shelf === 'wantToRead')}
            shelfName="Want to Read"
            onMoveBookToShelf={this.props.onChange}
          />
        </div>
      </div>
    );
  }
}

export default BooksList;
