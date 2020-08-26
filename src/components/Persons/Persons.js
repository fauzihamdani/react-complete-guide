import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
	// static getDerivedStateFormProps(props, state) {
	// 	console.log('[person,JS] getDerivedFromProps');
	// }

	shouldComponentUpdate(nextProps, nextState) {
		//<< this function just return boolean
		console.log('Persons.js shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('Persons.js shouldComponentUpdate');
		return { message: 'Snapshot!' };
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		//<<this function will run when once with all the updating
		console.log('PersonJs componentiDidUpdate');
		console.log(snapshot);
	}

	render() {
		console.log('[Persons.js] Rendering');
		return this.props.persons.map((person, index) => {
			return (
				<Person
					key={person.id}
					click={() => this.props.clicked(index)}
					name={person.name}
					age={person.age}
					changed={event => this.props.changed(event, person.id)}
				/>
			);
		});
	}
}

export default Persons;
