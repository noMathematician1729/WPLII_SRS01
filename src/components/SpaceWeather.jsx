import { useEffect, useState } from 'react'

function SpaceWeather() {
	const [events, setEvents] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		let isMounted = true
		const today = new Date()
		const startDate = new Date(today)
		startDate.setDate(today.getDate() - 7)

		const formatDate = (date) => date.toISOString().slice(0, 10)
		const url = `https://api.nasa.gov/DONKI/CME?startDate=${formatDate(startDate)}&endDate=${formatDate(today)}&api_key=DEMO_KEY`

		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Unable to load space weather data.')
				}
				return response.json()
			})
			.then((data) => {
				if (isMounted) {
					setEvents(data.slice(0, 4))
					setLoading(false)
				}
			})
			.catch((err) => {
				if (isMounted) {
					setError(err.message || 'Unable to load space weather data.')
					setLoading(false)
				}
			})

		return () => {
			isMounted = false
		}
	}, [])

	return (
		<section className="dashboard-card dashboard-card-wide">
			<div className="section-heading">
				<p className="section-kicker">Space weather</p>
				<h2>Recent solar activity and CME updates</h2>
			</div>

			{loading ? <p className="news-status">Loading space weather feed...</p> : null}
			{error ? <p className="news-status news-error">{error}</p> : null}

			{!loading && !error ? (
				<div className="news-list">
					{events.map((event, index) => {
						const analysis = event.cmeAnalyses?.[0]
						return (
							<article className="news-card" key={`${event.activityID || event.startTime}-${index}`}>
								<div className="news-meta">
									<span className="news-category">CME</span>
									<span>{event.startTime ? new Date(event.startTime).toLocaleDateString() : 'Unknown date'}</span>
								</div>
								<h3>{event.activityID || 'Solar event'}</h3>
								<p>{event.note || 'Space weather event reported by NASA.'}</p>
								<div className="weather-stats">
									<span>Catalog: {event.catalog || 'N/A'}</span>
									<span>Speed: {analysis?.speed ? `${analysis.speed} km/s` : 'Pending analysis'}</span>
								</div>
							</article>
						)
					})}
				</div>
			) : null}
		</section>
	)
}

export default SpaceWeather
