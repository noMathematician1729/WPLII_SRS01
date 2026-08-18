import heroImg from '../assets/pocketQube.jpg'
import AutomatedStatusPanel from './AutomatedStatusPanel.jsx'
import CommunicationStatus from './CommunicationStatus.jsx'
import CurrentAffairs from './CurrentAffairs.jsx'
import LiveMissionClock from './LiveMissionClock.jsx'
import MissionAlerts from './MissionAlerts.jsx'
import MissionHeader from './MissionHeader.jsx'
import NavBar from './NavBar.jsx'
import RoutingDecisionCard from './RoutingDecisionCard.jsx'
import SignalStrengthIndicator from './SignalStrengthIndicator.jsx'
import SpaceWeather from './SpaceWeather.jsx'
import TelemetryPanel from './TelemetryPanel.jsx'

function DashboardPage({ onLogout }) {
	const missionHeader = {
		eyebrow: 'PocketQube mission networking',
		title: 'AI-Based Autonomous Inter-Satellite Data Routing and Multi-Mode Amateur Radio Communication for PocketQube Missions',
		visual: {
			image: heroImg,
			label: 'Autonomous relay map',
			headline: 'Optimize inter-satellite hops in real time',
		},
	}

	const telemetryData = [
		{ label: 'Battery', value: '83%', detail: 'Charging under sunlight' },
		{ label: 'Thermal', value: '-4.2°C', detail: 'Within safe operating range' },
		{ label: 'Altitude', value: '521 km', detail: 'Stable low Earth orbit' },
		{ label: 'Power draw', value: '11.8 W', detail: 'Payload active' },
	]

	const alerts = [
		{ level: 'info', title: 'Relay selection updated', description: 'Switched to the lowest-latency hop based on current signal quality.' },
		{ level: 'warning', title: 'Telemetry jitter detected', description: 'Sampling variance increased on the last downlink packet group.' },
		{ level: 'critical', title: 'Antenna gain threshold near limit', description: 'Operator should review orientation if the value drops further.' },
	]

	return (
		<main className="page-shell">
			<NavBar isLoggedIn onLogout={onLogout} />
			<MissionHeader {...missionHeader} />

			<section className="dashboard-grid" id="overview">
				<TelemetryPanel title="Spacecraft health snapshot" data={telemetryData} />
				<LiveMissionClock />
				<AutomatedStatusPanel />
				<CommunicationStatus
					title="Ground link overview"
					status="Connected"
					lastContact="12 seconds ago"
					downlink="Strong"
					uplink="Stable"
				/>
				<RoutingDecisionCard
					title="Current relay path"
					route="PocketQube A → Relay Node 2 → Ground Station"
					reason="Highest confidence and lowest latency among available links"
					latency="184 ms"
					confidence="92%"
				/>
				<SignalStrengthIndicator title="RF signal level" strength="78%" noiseFloor="-103 dBm" />
				<MissionAlerts title="Priority event feed" alerts={alerts} />
				<SpaceWeather />
				<CurrentAffairs />
			</section>
		</main>
	)
}

export default DashboardPage
