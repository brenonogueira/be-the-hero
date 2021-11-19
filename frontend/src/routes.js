import React from 'react'
import { Route, Routes  } from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'

export default function RoutesApp() {
	return (
	<Routes>
			<Route path="/" exact component={<Logon />} />
				<Route path="/register" component={<Register />} />
	</Routes>
			
	)

}