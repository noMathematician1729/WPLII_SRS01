import { useEffect, useState } from 'react'

function AutomatedStatusPanel() {
	const [activeMode, setActiveMode] = useState(0)
	const modes = [
		{ title: 'Adaptive routing', description: 'Selecting the most reliable relay path in real time.' },
		{ title: 'Relay handoff', description: 'Preparing a clean transition to the next available node.' },
		{ title: 'Battery balancing', description: 'Recharging the payload bus while conserving reserve power.' },
	]

	useEffect(() => {
		const timerId = window.setInterval(() => {
			setActiveMode((current) => (current + 1) % modes.length)
		}, 3500)
		return () => window.clearInterval(timerId)
	}, [modes.length])

	return (
		<section className="dashboard-card">
			<div className="section-heading">
				<p className="section-kicker">System status</p>
				<h2>Auto-updating mission mode</h2>
			</div>
			<div className="status-cycle">
				<div className="status-dot" aria-hidden="true" />
				<div>
					<strong>{modes[activeMode].title}</strong>
					<p>{modes[activeMode].description}</p>
				</div>
			</div>
		</section>
	)
}

export default AutomatedStatusPanel
