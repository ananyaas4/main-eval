import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookToUserList } from "../redux/actions/booksActions";
import "../styles/BookCard.css";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleAddToMyBooks = () => {
    if (!user) {
      alert("Please log in to add books to your list.");
      return;
    }
    dispatch(addBookToUserList(user.uid, book));
  };

  return (
    <div className="book-card">
      <img src={book.coverImage} alt={book.title} className="book-image" />
      <h3>{book.title}</h3>
      <p>By {book.author}</p>
      <button onClick={handleAddToMyBooks}>Want to Read</button>
    </div>
  );
};

export default BookCard;