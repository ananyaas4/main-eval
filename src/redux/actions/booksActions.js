import axios from "axios";
import { DATABASE_URL } from "../../firebase/firebaseConfig";

// Action Types
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const ADD_BOOK = "ADD_BOOK";
export const UPDATE_BOOK_STATUS = "UPDATE_BOOK_STATUS";
export const UPDATE_BOOK_RATING = "UPDATE_BOOK_RATING"; // ✅ Added action type
export const DELETE_BOOK = "DELETE_BOOK";

// Fetch Books from Firebase
export const fetchBooks = () => async (dispatch) => {
  try {
    const response = await axios.get(`${DATABASE_URL}/books.json`);
    const booksData = response.data
      ? Object.keys(response.data).map((key) => ({ id: key, ...response.data[key] }))
      : [];
    dispatch({ type: FETCH_BOOKS_SUCCESS, payload: booksData });
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

// Add a New Book
export const addBook = (book) => async (dispatch) => {
  try {
    const response = await axios.post(`${DATABASE_URL}/books.json`, book);
    dispatch({ type: ADD_BOOK, payload: { id: response.data.name, ...book } });
  } catch (error) {
    console.error("Error adding book:", error);
  }
};

// Update Book Status
export const updateBookStatus = (bookId, newStatus) => async (dispatch) => {
  try {
    await axios.patch(`${DATABASE_URL}/books/${bookId}.json`, { status: newStatus });
    dispatch({ type: UPDATE_BOOK_STATUS, payload: { bookId, status: newStatus } });
  } catch (error) {
    console.error("Error updating book status:", error);
  }
};

// ✅ Update Book Rating
export const updateBookRating = (bookId, rating) => async (dispatch) => {
  try {
    await axios.patch(`${DATABASE_URL}/books/${bookId}.json`, { rating });
    dispatch({ type: UPDATE_BOOK_RATING, payload: { bookId, rating } });
  } catch (error) {
    console.error("Error updating book rating:", error);
  }
};

// Delete a Book
export const deleteBook = (bookId) => async (dispatch) => {
  try {
    await axios.delete(`${DATABASE_URL}/books/${bookId}.json`);
    dispatch({ type: DELETE_BOOK, payload: bookId });
  } catch (error) {
    console.error("Error deleting book:", error);
  }
};

export const addBookToUserList = (userId, book) => async (dispatch) => {
  try {
    await axios.put(`${DATABASE_URL}/users/${userId}/myBooks/${book.id}.json`, book);
    dispatch({ type: ADD_BOOK, payload: book });
  } catch (error) {
    console.error("Error adding book to user list:", error);
  }
};

export const FETCH_MY_BOOKS_SUCCESS = "FETCH_MY_BOOKS_SUCCESS";

export const fetchMyBooks = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`${DATABASE_URL}/users/${userId}/myBooks.json`);
    const myBooks = response.data
      ? Object.keys(response.data).map((key) => ({ id: key, ...response.data[key] }))
      : [];
    dispatch({ type: FETCH_MY_BOOKS_SUCCESS, payload: myBooks });
  } catch (error) {
    console.error("Error fetching user's books:", error);
  }
};
