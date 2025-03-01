import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBookStatus, updateBookRating } from "../redux/actions/booksActions";
import "../styles/MyBookCard.css";

const MyBookCard = ({ book }) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(book.status);
  const [rating, setRating] = useState(book.rating || 0);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    dispatch(updateBookStatus(book.id, e.target.value));
  };

  const handleRatingChange = (e) => {
    const newRating = parseInt(e.target.value);
    setRating(newRating);
    dispatch(updateBookRating(book.id, newRating));
  };

  return (
    <div className="my-book-card">
      <img src={book.coverImage} alt={book.title} className="book-image" />
      <h3>{book.title}</h3>
      <p>By {book.author}</p>
      <select value={status} onChange={handleStatusChange}>
        <option value="Want to Read">Want to Read</option>
        <option value="Currently Reading">Currently Reading</option>
        <option value="Read">Read</option>
      </select>
      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default MyBookCard;