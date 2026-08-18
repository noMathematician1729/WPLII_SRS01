import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import NavBar from './NavBar.jsx'

function LoginPage({ isLoggedIn, onLogin }) {
	const [formData, setFormData] = useState({ username: '', password: '' })
	const [errors, setErrors] = useState({})

	if (isLoggedIn) {
		return <Navigate to="/" replace />
	}

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormData((prev) => ({ ...prev, [name]: value }))
		setErrors((prev) => ({ ...prev, [name]: '' }))
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		const nextErrors = {
			username: formData.username.trim() ? '' : 'Username is required.',
			password: formData.password.trim() ? '' : 'Password is required.',
		}

		setErrors(nextErrors)

		if (Object.values(nextErrors).some(Boolean)) {
			return
		}

		if (formData.username.trim() !== 'admin' || formData.password.trim() !== '123456') {
			setErrors({ form: 'Use admin / 123456 for the dummy login.' })
			return
		}

		onLogin()
	}

	return (
		<main className="page-shell auth-shell">
			<NavBar />
			<section className="auth-card">
				<div className="section-heading">
					<p className="section-kicker">Authentication</p>
					<h2>Sign in to access the dashboard</h2>
				</div>
				<form className="auth-form" onSubmit={handleSubmit} noValidate>
					<label className="field-group">
						<span>Username</span>
						<input name="username" type="text" value={formData.username} onChange={handleChange} placeholder="admin" />
						{errors.username ? <small className="field-error">{errors.username}</small> : null}
					</label>
					<label className="field-group">
						<span>Password</span>
						<input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="123456" />
						{errors.password ? <small className="field-error">{errors.password}</small> : null}
					</label>
					{errors.form ? <p className="field-error">{errors.form}</p> : null}
					<div className="form-actions">
						<button type="submit">Login</button>
					</div>
				</form>
				<p className="auth-link-row">
					Need an account? <Link to="/register">Create one</Link>
				</p>
			</section>
		</main>
	)
}

export default LoginPage
