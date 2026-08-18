import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardPage from './components/DashboardPage.jsx'
import FormPage from './components/FormPage.jsx'
import LoginPage from './components/LoginPage.jsx'
import PreferencesPage from './components/PreferencesPage.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import RegisterPage from './components/RegisterPage.jsx'
import './App.css'

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	return (
		<Routes>
			<Route path="/login" element={<LoginPage isLoggedIn={isLoggedIn} onLogin={() => setIsLoggedIn(true)} />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/preferences" element={<PreferencesPage />} />
			<Route path="/" element={<ProtectedRoute isLoggedIn={isLoggedIn}><DashboardPage onLogout={() => setIsLoggedIn(false)} /></ProtectedRoute>} />
			<Route path="/form" element={<ProtectedRoute isLoggedIn={isLoggedIn}><FormPage onLogout={() => setIsLoggedIn(false)} /></ProtectedRoute>} />
		</Routes>
	)
}

export default App
