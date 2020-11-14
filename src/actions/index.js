export const addBook = (add) => ({
  type: 'ADD_BOOK',
  payload: add,
});
export const deleteBook = (del) => ({
  type: 'DELETE_BOOK',
  payload: del,
});
export const searchBook = (txt) => ({
  type: 'SEARCH_BOOK',
  payload: txt,
});
