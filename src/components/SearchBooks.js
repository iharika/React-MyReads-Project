import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Book from './Book';
import * as booksApi from '../BooksAPI';
import * as utils from '../utils/utils';

class SearchBooks extends React.Component {
	state = {
		userBooks: this.props.userBooks,
		Books: [],
		searchValue: ''
	};
	componentDidMount() {
		console.log(this.state.userBooks);
	}
	onSearch = event => {
		if (event.target.value && event.target.value.length > 2) {
			let value = event.target.value;
			this.setState({ searchValue: value });
			this.searchBooks(value);
		} else {
			this.setState({ Books: [] });
		}
	};
	addBookToShelf = (book, shelfToMove) => {
		utils.moveBookToShelf(book, shelfToMove);
	};
	searchBooks = value => {
		booksApi.search(value).then(data => {
			if (data.length > 0) {
				this.setState({ Books: data });
			}
		});
	};
	render() {
		const shelfBooks = this.state.Books;
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/">
						<button className="close-search">Close</button>
					</Link>
					<div className="search-books-input-wrapper">
						{}
						<input
							type="text"
							placeholder="Search by title or author"
							onChange={this.onSearch}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{shelfBooks.map(data => (
							<li key={data.id}>
								<Book
									bookData={data}
									moveBookToShelf={shelfToMove => {
										this.addBookToShelf(data, shelfToMove);
									}}
								/>
							</li>
						))}
					</ol>
				</div>
			</div>
		);
	}
}

export default SearchBooks;
