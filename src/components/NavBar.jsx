import { Link } from 'react-router-dom'

function NavBar({ isLoggedIn = false, onLogout }) {
	return (
		<nav className="top-nav" aria-label="Primary navigation">
			<div className="brand-mark">PocketQube Ops</div>
			<div className="nav-links">
				{isLoggedIn ? (
					<>
						<Link to="/">Dashboard</Link>
						<Link to="/form">Mission Form</Link>
						<button type="button" className="nav-button" onClick={onLogout}>
							Logout
						</button>
					</>
				) : (
					<>
						<Link to="/login">Login</Link>
						<Link to="/register">Register</Link>
						<Link to="/preferences">Preferences</Link>
					</>
				)}
			</div>
		</nav>
	)
}

export default NavBar
