import { useEffect, useState } from 'react'

function CurrentAffairs() {
	const [articles, setArticles] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		let isMounted = true

		fetch('/news.json')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Unable to load news articles.')
				}
				return response.json()
			})
			.then((data) => {
				if (isMounted) {
					setArticles(data)
					setLoading(false)
				}
			})
			.catch((err) => {
				if (isMounted) {
					setError(err.message || 'Unable to load news articles.')
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
				<p className="section-kicker">Current affairs</p>
				<h2>Latest stories about satellites and space technology</h2>
			</div>

			{loading ? <p className="news-status">Loading articles...</p> : null}
			{error ? <p className="news-status news-error">{error}</p> : null}

			{!loading && !error ? (
				<div className="news-list">
					{articles.map((article, index) => (
						<article className="news-card" key={`${article.title}-${index}`}>
							<div className="news-meta">
								<span className="news-category">{article.category}</span>
								<span>{article.date}</span>
							</div>
							<h3>{article.title}</h3>
							<p>{article.summary}</p>
							<a href={article.link} target="_blank" rel="noreferrer">
								Read more
							</a>
						</article>
					))}
				</div>
			) : null}
		</section>
	)
}

export default CurrentAffairs
