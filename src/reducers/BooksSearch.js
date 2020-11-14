const booksSearch = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_BOOK':
      return action.payload;
    default:
      return state;
  };
};

export default booksSearch;
