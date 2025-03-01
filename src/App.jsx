import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyBooksPage from "./pages/MyBooksPage";
import Navbar from "./components/Navbar";

const App = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-books" element={user ? <MyBooksPage /> : <Login />} />
      </Routes>
    </>
  );
};

export default App;