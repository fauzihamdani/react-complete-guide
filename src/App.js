import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: 'Fauzi', age: 28 },
			{ name: 'Hamdani', age: 29 },
			{ name: 'dani', age: 54 },
		],
	};

	switchNameHandler = () => {
		// console.log('was clicked');
		this.setState({
			persons: [
				{ name: 'Fauzi Hamdani', age: 13 },
				{ name: 'Hamdani Fauzi', age: 25 },
				{ name: 'dani fauzi', age: 54 },
			],
		});
	};

	render() {
		return (
			<div className='App'>
				<h1>Hi, I'am a ReactJs developer</h1>
				<button onClick={this.switchNameHandler}>Switch Name</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}>
					My Hobbies : Fishing
				</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>
			</div>
		);
	}
}

export default App;
