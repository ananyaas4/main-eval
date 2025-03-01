import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/authActions";
import "../styles/Register.css";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const handleRegister = (e) => {
		e.preventDefault();
		dispatch(registerUser(email, password));
	};

	return (
		<div className="register-container">
			<h2>Register</h2>
			<form onSubmit={handleRegister}>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default Register;