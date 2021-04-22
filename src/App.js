import React from 'react';
import './App.css';

import Home from './Pages/Home';
import OurTeam from './Pages/OurTeam';
import Error from './Pages/Error';
import Login from './Pages/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
				<Switch>
					<Route exact path="/" >
						<Home />
					</Route>
					<Route exact path="/team" >
						<OurTeam />
					</Route>
          <Route exact path="/login" >
						<Login />
					</Route>
					<Route path="*" >
						<Error />
					</Route>
				</Switch>
			</Router>
    </div>
  );
}

export default App;
