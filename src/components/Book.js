import React from 'react';
import '../App.css';

class Book extends React.Component {
	state = {
		myBook: this.props.bookData
	};
	render() {
		const bookImg = this.state.myBook.imageLinks.smallThumbnail;

		return (
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url(${bookImg})`
						}}
					/>
					<div className="book-shelf-changer">
						<select>
							<option value="move" disabled>
								Move to...
							</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{this.state.myBook.title}</div>
				<div className="book-authors">Harper Lee</div>
			</div>
		);
	}
}

export default Book;
