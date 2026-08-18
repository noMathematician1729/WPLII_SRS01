function MissionVisual({ image, label, headline }) {
	return (
		<div className="mission-visual" aria-hidden="true">
			<div className="orbital-ring orbital-ring-one" />
			<div className="orbital-ring orbital-ring-two" />
			<div className="visual-card">
				<img src={image} alt="" />
				<div className="visual-card-copy">
					<span>{label}</span>
					<strong>{headline}</strong>
				</div>
			</div>
		</div>
	)
}

export default MissionVisual
