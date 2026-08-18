import MissionVisual from './MissionVisual.jsx'

function MissionHeader({ eyebrow, title, visual }) {
	return (
		<header className="mission-header">
			<div className="mission-copy">
				<p className="eyebrow">{eyebrow}</p>
				<h1>{title}</h1>
			</div>

			<MissionVisual image={visual.image} label={visual.label} headline={visual.headline} />
		</header>
	)
}

export default MissionHeader
