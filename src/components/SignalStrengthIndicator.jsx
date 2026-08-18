function SignalStrengthIndicator({ title, strength, noiseFloor }) {
	return (
		<section className="dashboard-card">
			<div className="section-heading">
				<p className="section-kicker">Signal health</p>
				<h2>{title}</h2>
			</div>
			<div className="signal-readout">
				<strong>{strength}</strong>
				<span>Noise floor: {noiseFloor}</span>
			</div>
			<div className="signal-meter" aria-hidden="true">
				<span style={{ width: strength }} />
			</div>
		</section>
	)
}

export default SignalStrengthIndicator
