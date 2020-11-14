
import bookCollection from '../data';

const booksReducer = (state = bookCollection, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'DELETE_BOOK':
      return state.filter((x) => x.title !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
