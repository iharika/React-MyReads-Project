import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class SearchBooks extends React.Component {
	render() {
		return (
			<div className='search-books'>
				<div className='search-books-bar'>
					<Link to='/'>
						<button className='close-search'>Close</button>
					</Link>
					<div className='search-books-input-wrapper'>
						{}
						<input type='text' placeholder='Search by title or author' />
					</div>
				</div>
				<div className='search-books-results'>
					<ol className='books-grid' />
				</div>
			</div>
		);
	}
}

export default SearchBooks;

//TODO: Need to add onClick property to the close button
