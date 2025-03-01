import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/authActions";
import "../styles/Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar">
      <h1>My Library</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {user && <Link to="/mybooks">My Books</Link>}
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login/Register</Link>
        )}
      </div>
      {user && <p>{user.email}</p>}
    </nav>
  );
};

export default Navbar;