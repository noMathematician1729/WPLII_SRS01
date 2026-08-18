import { useState } from 'react'
import NavBar from './NavBar.jsx'

function PreferencesPage() {
	const [agreed, setAgreed] = useState(false)
	const [country, setCountry] = useState('')
	const [error, setError] = useState('')
	const [submitted, setSubmitted] = useState(false)

	const handleSubmit = (event) => {
		event.preventDefault()
		if (!agreed) {
			setError('Please agree to the terms before submitting.')
			setSubmitted(false)
			return
		}
		setError('')
		setSubmitted(true)
	}

	return (
		<main className="page-shell auth-shell">
			<NavBar />
			<section className="auth-card">
				<div className="section-heading">
					<p className="section-kicker">Preferences</p>
					<h2>Select your country and agree to the terms</h2>
				</div>
				<form className="auth-form" onSubmit={handleSubmit} noValidate>
					<label className="field-group">
						<span>Country</span>
						<select value={country} onChange={(event) => setCountry(event.target.value)}>
							<option value="">Select a country</option>
							<option value="India">India</option>
							<option value="USA">USA</option>
							<option value="UK">UK</option>
						</select>
					</label>
					<label className="checkbox-row">
						<input type="checkbox" checked={agreed} onChange={() => setAgreed((prev) => !prev)} />
						<span>I agree to the terms and conditions.</span>
					</label>
					{error ? <p className="field-error">{error}</p> : null}
					<div className="form-actions">
						<button type="submit">Submit</button>
					</div>
					{submitted ? <p className="field-success">Preferences saved for {country || 'your selected country'}.</p> : null}
				</form>
			</section>
		</main>
	)
}

export default PreferencesPage
