
import React from 'react';
import { Router, Route } from 'react-router'
import About from './About'
import Signup from './Signup'
import Profile from './Profile'
import Park from './Park'
import Event from './Event'
import Settings from './Settings'
import Header from './Header'
import Parks from './Parks'
import ParkPoints from './ParkPoints'

require('../../scss/style.scss');

const App = () => (
	<div className="root">
		 <Header/>
		 <Route exact path="/" component={Signup}/>
		 <Route exact path="/about" component={About}/>
		 <Route exact path="/profile" component={Profile}/>
		 <Route exact path="/parks" component={Parks}/>
		 <Route exact path="/settings" component={Settings}/>
     <Route exact path="/signup" component={Signup}/>
		 <Route exact path="/myparkpoints" component={ParkPoints}/>
	</div>
);

export default App;
