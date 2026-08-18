import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar.jsx'

function RegisterPage() {
	const [formData, setFormData] = useState({ name: '', email: '', password: '' })
	const [errors, setErrors] = useState({})
	const [submitted, setSubmitted] = useState(false)

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormData((prev) => ({ ...prev, [name]: value }))
		setErrors((prev) => ({ ...prev, [name]: '' }))
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		const nextErrors = {
			name: formData.name.trim() ? '' : 'Name is required.',
			email: formData.email.includes('@') ? '' : 'Email must contain @.',
			password: formData.password.length >= 6 ? '' : 'Password must be at least 6 characters.',
		}

		setErrors(nextErrors)
		if (Object.values(nextErrors).some(Boolean)) {
			setSubmitted(false)
			return
		}

		setSubmitted(true)
	}

	return (
		<main className="page-shell auth-shell">
			<NavBar />
			<section className="auth-card">
				<div className="section-heading">
					<p className="section-kicker">Registration</p>
					<h2>Create an account</h2>
				</div>
				<form className="auth-form" onSubmit={handleSubmit} noValidate>
					<label className="field-group">
						<span>Name</span>
						<input name="name" value={formData.name} onChange={handleChange} placeholder="Alex Rivera" />
						{errors.name ? <small className="field-error">{errors.name}</small> : null}
					</label>
					<label className="field-group">
						<span>Email</span>
						<input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="alex@example.com" />
						{errors.email ? <small className="field-error">{errors.email}</small> : null}
					</label>
					<label className="field-group">
						<span>Password</span>
						<input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="At least 6 characters" />
						{errors.password ? <small className="field-error">{errors.password}</small> : null}
					</label>
					<div className="form-actions">
						<button type="submit">Register</button>
					</div>
					{submitted ? <p className="field-success">Account ready. You can now sign in.</p> : null}
				</form>
				<p className="auth-link-row">
					Already registered? <Link to="/login">Login here</Link>
				</p>
			</section>
		</main>
	)
}

export default RegisterPage
