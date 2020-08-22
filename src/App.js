import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<h1>Hi, I'am a ReactJs developer</h1>
				<Person name='fauzi' age='20' />
				<Person name='hamdani' age='21'>
					My Hobbies : Fishing
				</Person>
				<Person name='dani' age='54' />
			</div>
		);
	}
}

export default App;
