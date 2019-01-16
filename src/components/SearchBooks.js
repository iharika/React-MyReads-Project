import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Book from './Book';
import * as booksApi from '../BooksAPI';

class SearchBooks extends React.Component {
	state = {
		Books: [],
		searchValue: ''
	};
	onSearch = event => {
		if (event.target.value) {
			let value = event.target.value;
			this.setState({ searchValue: value });
			this.searchBooks(value);
		}
	};
	searchBooks = value => {
		booksApi.search(value).then(data => {
			console.log(data);
			this.setState({ Books: data });
		});
	};
	render() {
		const shelfBooks = this.state.Books;
		return (
			<div className='search-books'>
				<div className='search-books-bar'>
					<Link to='/'>
						<button className='close-search'>Close</button>
					</Link>
					<div className='search-books-input-wrapper'>
						{}
						<input
							type='text'
							placeholder='Search by title or author'
							onChange={this.onSearch}
						/>
					</div>
				</div>
				<div className='search-books-results'>
					<ol className='books-grid'>
						{shelfBooks.map(data => (
							<li key={data.id}>
								<Book
									bookData={data}
									moveBookToShelf={shelfToMove => {
										this.moveBook(data, shelfToMove);
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
