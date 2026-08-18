function CommunicationStatus({ title, status, lastContact, downlink, uplink }) {
	return (
		<section className="dashboard-card">
			<div className="section-heading">
				<p className="section-kicker">Link status</p>
				<h2>{title}</h2>
			</div>
			<div className="status-pill">{status}</div>
			<div className="status-list">
				<div>
					<span>Last contact</span>
					<strong>{lastContact}</strong>
				</div>
				<div>
					<span>Downlink</span>
					<strong>{downlink}</strong>
				</div>
				<div>
					<span>Uplink</span>
					<strong>{uplink}</strong>
				</div>
			</div>
		</section>
	)
}

export default CommunicationStatus
