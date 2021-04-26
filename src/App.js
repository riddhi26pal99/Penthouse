import React, { useEffect } from 'react';
import './App.css';

import { auth, db } from './firebase';

import { useDispatch } from 'react-redux';
import { login, selectUser, logout } from './features/userSlice';
import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import OurTeam from './Pages/OurTeam';
import Error from './Pages/Error';
import Login from './Pages/Login';

function App() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	useEffect(() => {
		auth.onAuthStateChanged(async (authUser) => {
			if (authUser) {
				let user;
				await db
					.doc(`/users/${authUser.uid}`)
					.get()
					.then((doc) => {
						if (!doc.exists) {
							user = {
								username: authUser.displayName,
								image: authUser.photoURL,
								email: authUser.email,
								bio: `Hey, I am ${authUser.displayName}`,
							};
						} else {
							user = doc.data();
						}
					})
					.then((_) => {
						dispatch(login(user));
					});
			} else {
				dispatch(logout());
			}
		});
	}, [dispatch]);

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
