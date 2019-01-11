import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import SearchBooks from './components/SearchBooks';
import BooksList from './components/BooksList';
import * as booksApi from './BooksAPI';

class BooksApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			/**
			 * TODO: Instead of using this state variable to keep track of which page
			 * we're on, use the URL in the browser's address bar. This will ensure that
			 * users can use the browser's back and forward buttons to navigate between
			 * pages, as well as provide a good URL they can bookmark and share.
			 */
			showSearchPage: false,
			books: []
		};
	}

	componentDidMount() {
		this.renderData();
	}

	renderData = () => {
		booksApi.getAll().then(data => {
			this.setState({
				books: data
			});
		});
	};

	moveBookToShelf = (bookToMove, shelfToMove) => {
		booksApi.update(bookToMove, shelfToMove).then(() => {
			this.renderData();
		});
	};

	render() {
		return (
			<div className='app'>
				<Route
					exact
					path='/'
					render={() => (
						<div className='list-books'>
							<div className='list-books-title'>
								<h1>MyReads</h1>
							</div>
							<BooksList
								books={this.state.books}
								onChange={this.moveBookToShelf}
							/>
							<div className='open-search'>
								<Link to='/search'>
									<button>Add a book</button>
								</Link>
							</div>
						</div>
					)}
				/>
				<div>
					<Route path='/search' component={SearchBooks} />
				</div>
			</div>
		);
	}
}

export default BooksApp;
