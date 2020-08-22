import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
	const [personsState, setPersonState] = useState({
		// userSate is a hook that return 2 value, (the state it self and setState to modify state). therefore used arrayDestructuring
		persons: [
			{ name: 'Fauzi', age: 28 },
			{ name: 'Hamdani', age: 29 },
			{ name: 'dani', age: 54 },
		],
	});

	const [otherstate, setOtherstate] = useState('some other value');

	console.log(personsState, otherstate);

	const switchNameHandler = () => {
		// console.log('was clicked');
		setPersonState({
			persons: [
				{ name: 'Fauzi Hamdani', age: 13 },
				{ name: 'Hamdani Fauzi', age: 25 },
				{ name: 'dani fauzi', age: 789 },
			],
			otherState: personsState.otherState,
		});
	};
	return (
		<div className='App'>
			<h1>Hi, I'am a ReactJs developer</h1>
			<button onClick={switchNameHandler}>Switch Name</button>
			<Person
				name={personsState.persons[0].name}
				age={personsState.persons[0].age}
			/>
			<Person
				name={personsState.persons[1].name}
				age={personsState.persons[1].age}>
				My Hobbies : Fishing
			</Person>
			<Person
				name={personsState.persons[2].name}
				age={personsState.persons[2].age}
			/>
		</div>
	);
};

export default App;
