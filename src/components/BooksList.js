import React from 'react';
import BookShelf from './BookShelf.js';
import * as booksApi from '../BooksAPI';

class BooksList extends React.Component {
	constructor(props) {
		super();
		this.state = {
			books: []
		};
	}
	loadData() {
		var promise = new Promise((resolve, reject) => {
			booksApi.getAll().then(data => {
				resolve(data);
			});
		});
		return promise;
	}
	componentDidMount() {
		this.loadData().then(data => {
			this.setState({
				books: data
			});
		});
	}

	render() {
		const books = this.state.books;
		return (
			<div className="list-books-content">
				<div>
					<BookShelf
						shelfBooks={books.filter(book => book.shelf === 'currentlyReading')}
						shelfName="Currently Reading"
					/>
					<BookShelf
						shelfBooks={books.filter(book => book.shelf === 'read')}
						shelfName="Read"
					/>
					<BookShelf
						shelfBooks={books.filter(book => book.shelf === 'wantToRead')}
						shelfName="Want to Read"
					/>
				</div>
			</div>
		);
	}
}

export default BooksList;
