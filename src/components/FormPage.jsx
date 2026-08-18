import MissionForm from './MissionForm.jsx'
import NavBar from './NavBar.jsx'

function FormPage({ onLogout }) {
	return (
		<main className="page-shell">
			<NavBar isLoggedIn onLogout={onLogout} />
			<MissionForm />
		</main>
	)
}

export default FormPage
