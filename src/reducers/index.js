import { combineReducers } from 'redux';
import booksReducer from './BooksReducer';
import booksSearch from './BooksSearch';

const allReducers = combineReducers({
  books: booksReducer,
  search: booksSearch,
});

export default allReducers;
