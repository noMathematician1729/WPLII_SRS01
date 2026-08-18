import { useEffect, useState } from 'react'

function MissionForm() {
	const [formData, setFormData] = useState({
		operator: '',
		mission: '',
		relay: '',
		priority: 'High',
		notes: '',
	})
	const [errors, setErrors] = useState({})
	const [submitted, setSubmitted] = useState(false)

	useEffect(() => {
		if (!submitted) return
		const timerId = window.setTimeout(() => setSubmitted(false), 2600)
		return () => window.clearTimeout(timerId)
	}, [submitted])

	const validateField = (name, value) => {
		if (name === 'notes') {
			return value.trim().length >= 10 ? '' : 'Please add at least 10 characters.'
		}

		if (name === 'operator' || name === 'mission' || name === 'relay') {
			return value.trim().length >= 3 ? '' : 'Please enter at least 3 characters.'
		}

		return ''
	}

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormData((prev) => ({ ...prev, [name]: value }))
		setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		const nextErrors = {
			operator: validateField('operator', formData.operator),
			mission: validateField('mission', formData.mission),
			relay: validateField('relay', formData.relay),
			notes: validateField('notes', formData.notes),
		}

		setErrors(nextErrors)

		if (Object.values(nextErrors).some(Boolean)) {
			setSubmitted(false)
			return
		}

		setSubmitted(true)
	}

	return (
		<section className="dashboard-card form-card" id="form">
			<div className="section-heading">
				<p className="section-kicker">Mission request</p>
				<h2>Submit a relay update request</h2>
			</div>
			<form className="mission-form" onSubmit={handleSubmit} noValidate>
				<div className="form-grid">
					<label className="field-group">
						<span>Operator name</span>
						<input name="operator" value={formData.operator} onChange={handleChange} placeholder="A. Rivera" />
						{errors.operator ? <small className="field-error">{errors.operator}</small> : null}
					</label>
					<label className="field-group">
						<span>Mission target</span>
						<input name="mission" value={formData.mission} onChange={handleChange} placeholder="Relay orbit update" />
						{errors.mission ? <small className="field-error">{errors.mission}</small> : null}
					</label>
					<label className="field-group">
						<span>Preferred relay</span>
						<input name="relay" value={formData.relay} onChange={handleChange} placeholder="Relay Node 2" />
						{errors.relay ? <small className="field-error">{errors.relay}</small> : null}
					</label>
					<label className="field-group">
						<span>Priority</span>
						<select name="priority" value={formData.priority} onChange={handleChange}>
							<option value="High">High</option>
							<option value="Medium">Medium</option>
							<option value="Low">Low</option>
						</select>
					</label>
				</div>
				<label className="field-group field-group-full">
					<span>Notes</span>
					<textarea name="notes" value={formData.notes} onChange={handleChange} rows="4" placeholder="Add timing details or routing notes..." />
					{errors.notes ? <small className="field-error">{errors.notes}</small> : null}
				</label>
				<div className="form-actions">
					<button type="submit">Send request</button>
					{submitted ? <p className="form-status">Request queued successfully.</p> : null}
				</div>
			</form>
		</section>
	)
}

export default MissionForm
