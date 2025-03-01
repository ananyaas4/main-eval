import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../redux/actions/booksActions";
import BookCard from "../components/BookCard";
import "../styles/Home.css";

const Home = () => {
	const user = useSelector((state) => state.auth.user);
	const books = useSelector((state) => state.books.books);
	const loading = useSelector((state) => state.books.loading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchBooks());
	}, [dispatch]);

	return (
		<div className="home-container">
			<h1 className="home-title">My Library</h1>
			{loading ? (
				<p>Loading books...</p>
			) : (
				<div className="book-list">
					{books.map((book) => (
						<BookCard key={book.id} book={book} user={user} />
					))}
				</div>
			)}
		</div>
	);
};

export default Home;