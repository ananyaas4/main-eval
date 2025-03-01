import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMyBooks } from "../redux/actions/booksActions";
import MyBookCard from "../components/MyBookCard";
import "../styles/MyBooksPage.css";

const MyBooksPage = () => {
	const user = useSelector((state) => state.auth.user);
	const myBooks = useSelector((state) => state.books.myBooks);
	const dispatch = useDispatch();

	useEffect(() => {
		if (user) {
			dispatch(fetchMyBooks(user.uid));
		}
	}, [dispatch, user]);

	if (!user) {
		return <p className="login-message">Please login to access your books.</p>;
	}

	return (
		<div className="my-books-container">
			<h2>My Books</h2>
			<div className="my-books-list">
				{myBooks.length > 0 ? (
					myBooks.map((book) => <MyBookCard key={book.id} book={book} />)
				) : (
					<p>No books added yet.</p>
				)}
			</div>
		</div>
	);
};

export default MyBooksPage;