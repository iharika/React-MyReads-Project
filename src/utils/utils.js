import * as booksApi from '../BooksAPI';

export const moveBookToShelf = (bookToMove, shelfToMove) => {
	booksApi.update(bookToMove, shelfToMove).then(() => {});
};
