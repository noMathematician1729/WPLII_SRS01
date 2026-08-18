function MissionAlerts({ title, alerts }) {
	return (
		<section className="dashboard-card dashboard-card-wide">
			<div className="section-heading">
				<p className="section-kicker">Mission alerts</p>
				<h2>{title}</h2>
			</div>
			<div className="alerts-list">
				{alerts.map((alert) => (
					<div className="alert-item" key={alert.title}>
						<span className={`alert-badge alert-${alert.level}`}>{alert.level}</span>
						<div>
							<strong>{alert.title}</strong>
							<p>{alert.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default MissionAlerts
