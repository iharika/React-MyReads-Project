import React from 'react';
import Book from './Book';

class BookShelf extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			shelf: this.props.shelfBooks
		}
	}
	moveBook = (book, shelf) => {
		this.props.onMoveBookToShelf(book, shelf)
	}
	render() {
		const shelfBooks = this.props.shelfBooks;
		const shelfName = this.props.shelfName;
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{shelfName}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{shelfBooks.map(data => (
							<li key={data.id}>
								<Book bookData={data} moveBookToShelf={(shelfToMove) => { this.moveBook(data, shelfToMove) }} />
							</li>
						))}
					</ol>
				</div>
			</div>
		);
	}
}
export default BookShelf;
