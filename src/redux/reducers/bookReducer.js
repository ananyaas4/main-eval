import { FETCH_BOOKS_SUCCESS, FETCH_MY_BOOKS_SUCCESS, ADD_BOOK, UPDATE_BOOK_STATUS, UPDATE_BOOK_RATING, DELETE_BOOK } from "../actions/booksActions";

const initialState = {
  books: [],
  myBooks: [], // ✅ Added this to store user-specific books
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return { ...state, books: action.payload };
    case FETCH_MY_BOOKS_SUCCESS: // ✅ Added reducer case for fetchMyBooks
      return { ...state, myBooks: action.payload };
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case UPDATE_BOOK_STATUS:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.bookId ? { ...book, status: action.payload.status } : book
        ),
      };
    case UPDATE_BOOK_RATING:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.bookId ? { ...book, rating: action.payload.rating } : book
        ),
      };
    case DELETE_BOOK:
      return { ...state, books: state.books.filter((book) => book.id !== action.payload) };
    default:
      return state;
  }
};

export default bookReducer;
