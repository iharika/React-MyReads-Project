import React from 'react';
import '../App.css';
class Book extends React.Component {
	state = {
		myBook: this.props.bookData
	};
	moveShelf = e => {
		this.props.moveBookToShelf(e.target.value);
	};
	render() {
		const book = this.state.myBook;
		const bookImg = book.imageLinks ? book.imageLinks.smallThumbnail : '';
		const bookAuthors =
			this.state.myBook.authors && this.state.myBook.authors.length > 0
				? this.state.myBook.authors.join(', ')
				: '';
		return (
			<div className='book'>
				<div className='book-top'>
					<div
						className='book-cover'
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url(${bookImg})`
						}}
					/>
					<div className='book-shelf-changer'>
						<select value={this.state.myBook.shelf} onChange={this.moveShelf}>
							<option value='move' disabled>
								Move to...
							</option>
							<option value='currentlyReading'>Currently Reading</option>
							<option value='wantToRead'>Want to Read</option>
							<option value='read'>Read</option>
							<option value='none'>None</option>
						</select>
					</div>
				</div>
				<div className='book-title'>{this.state.myBook.title}</div>
				<div className='book-authors'>{bookAuthors}</div>
			</div>
		);
	}
}

export default Book;
