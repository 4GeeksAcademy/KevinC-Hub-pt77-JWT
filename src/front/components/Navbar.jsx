import { Link, useNavigate } from "react-router-dom";
import { logout } from "../hooks/actions";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
	const navigate = useNavigate();
	const { dispatch } = useGlobalReducer(); // ✅ Get dispatch

	const handleLogout = () => {
		logout(dispatch); // ✅ Clear global state
		navigate("/login"); // ✅ Redirect to login
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link className="mx-2" to="/signup">
						<button className="btn btn-primary">Signup</button>
					</Link>
					<Link to="/login">
						<button className="btn btn-primary">Login</button>
					</Link>
					<button className="btn btn-info" onClick={handleLogout}>
						Logout
					</button>
				</div>
			</div>
		</nav>
	);
};
