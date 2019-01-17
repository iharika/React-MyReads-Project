import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Book from './Book';
import * as booksApi from '../BooksAPI';
import * as utils from '../utils/utils';

class SearchBooks extends React.Component {
	state = {
		Books: [],
		searchValue: ''
	};
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
		this.props.onChange(book, shelfToMove);
	};
	compareAndUpdateShelfForSearchResults(result) {
		let userBooks = this.props.userBooks;
		result.forEach(function(elem) {
			elem.shelf = 'none';
		});
		for (let book of result) {
			for (let userBook of userBooks) {
				if (book.id === userBook.id) {
					book.shelf = userBook.shelf;
				}
			}
		}
		return result;
	}
	searchBooks = value => {
		booksApi.search(value).then(data => {
			if (data.length > 0) {
				data = this.compareAndUpdateShelfForSearchResults(data);
				this.setState({ Books: data });
			}
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
