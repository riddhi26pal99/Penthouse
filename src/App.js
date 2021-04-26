import React from 'react';
import './App.css';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

import Home from './Pages/Home';
import OurTeam from './Pages/OurTeam';
import Error from './Pages/Error';
import Login from './Pages/Login';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	const [user, loading] = useAuthState(auth);

	return (
		<div className='App'>
			<Router>
				{!user ? (
					<Login />
				) : (
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/team'>
							<OurTeam />
						</Route>
						<Route path='*'>
							<Error />
						</Route>
					</Switch>
				)}
			</Router>
		</div>
	);
}

export default App;
