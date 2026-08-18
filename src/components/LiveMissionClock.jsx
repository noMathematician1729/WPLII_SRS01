import { useEffect, useState } from 'react'

function LiveMissionClock() {
	const [now, setNow] = useState(() => new Date())

	useEffect(() => {
		const timerId = window.setInterval(() => setNow(new Date()), 1000)
		return () => window.clearInterval(timerId)
	}, [])

	return (
		<section className="dashboard-card">
			<div className="section-heading">
				<p className="section-kicker">Mission clock</p>
				<h2>Live spacecraft time</h2>
			</div>
			<div className="clock-display">
				<strong>{now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</strong>
				<span>{now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</span>
			</div>
			<div className="clock-metrics">
				<div>
					<span>Orbit phase</span>
					<strong>Sunlit pass</strong>
				</div>
				<div>
					<span>Next sync</span>
					<strong>00:42:18</strong>
				</div>
			</div>
		</section>
	)
}

export default LiveMissionClock
