function TelemetryPanel({ title, data }) {
	return (
		<section className="dashboard-card">
			<div className="section-heading">
				<p className="section-kicker">Live telemetry</p>
				<h2>{title}</h2>
			</div>
			<div className="telemetry-grid">
				{data.map((item) => (
					<div className="telemetry-item" key={item.label}>
						<span>{item.label}</span>
						<strong>{item.value}</strong>
						<small>{item.detail}</small>
					</div>
				))}
			</div>
		</section>
	)
}

export default TelemetryPanel
