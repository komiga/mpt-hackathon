
import React from 'react';
import { Router, Route } from 'react-router'
import About from './About'
import Signup from './Signup'
import Profile from './Profile'
import Settings from './Settings'
import Header from './Header'
import Parks from './Parks'

require('../../scss/style.scss');

const App = () => (

	<div>
		<Header/>
		 <Route exact path="/" component={Signup}/>
		 <Route exact path="/about" component={About}/>
		 <Route exact path="/profile" component={Profile}/>
     <Route exact path="/settings" component={Settings}/>
		 <Route exact path="/parks" component={Parks}/>
	</div>
);

export default App;
