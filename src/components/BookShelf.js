import React from 'react';
import Book from './Book';

class BookShelf extends React.Component {
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
								<Book bookData={data} />
							</li>
						))}
					</ol>
				</div>
			</div>
		);
	}
}
export default BookShelf;
