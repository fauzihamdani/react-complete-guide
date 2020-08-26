import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('[app.js] constructor', props);
	}

	state = {
		persons: [
			{ id: 'asd', name: 'Max', age: 28 },
			{ id: 'fds', name: 'Manu', age: 29 },
			{ id: 'wer', name: 'Stephanie', age: 26 },
			{ id: 'e23', name: 'blabla', age: 49 },
		],
		otherState: 'some other value',
		showPersons: false,
	};

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	componentDidMount() {
		console.log('[App.js] ComponentDidMount ');
	}

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			//get selected person
			return p.id === id;
		});

		const person = { ...this.state.persons[personIndex] }; //person = selected person

		// const person = Object.assign({},this.state.persons[personIndex])

		person.name = event.target.value; //select name from var. person

		const persons = [...this.state.persons];
		persons[personIndex] = person; // << this line change the selected index text into the text that typed by user

		this.setState({ persons: persons });
	};

	deletePersonHandler = personIndex => {
		// const persons = this.state.persons;
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	render() {
		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangedHandler}
				/>
			);
		}

		return (
			<div className={classes.App}>
				<Cockpit
					title={this.props.appTitle}
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler}
				/>
				{persons}
			</div>
		);
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
	}
}

export default App;
