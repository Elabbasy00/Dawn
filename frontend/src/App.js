import React from 'react'

<<<<<<< HEAD
import axios from 'axios'

axios.defaults.withCredentials = true

function App({ title }) {
	return (
		<div>
			<h1>Hi</h1>
=======
import TopNav from './components/navbar/navbar.component'

import Footer from './components/footer/footer.components'

import { Route } from 'react-router-dom'
import HomePage from './pages/Home/home-page'
// axios.defaults.withCredentials = true

function App() {
	return (
		<div>
			<TopNav />

			<Route component={HomePage} to='/' />

			<Footer />
>>>>>>> 6aeeafd234b7b746715b45c462ff54050a3df5f6
		</div>
	)
}

export default App
