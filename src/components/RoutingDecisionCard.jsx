function RoutingDecisionCard({ title, route, reason, latency, confidence }) {
	return (
		<section className="dashboard-card">
			<div className="section-heading">
				<p className="section-kicker">Routing decision</p>
				<h2>{title}</h2>
			</div>
			<div className="route-highlight">
				<strong>{route}</strong>
				<span>{reason}</span>
			</div>
			<div className="route-meta">
				<div>
					<span>Latency</span>
					<strong>{latency}</strong>
				</div>
				<div>
					<span>Confidence</span>
					<strong>{confidence}</strong>
				</div>
			</div>
		</section>
	)
}

export default RoutingDecisionCard
