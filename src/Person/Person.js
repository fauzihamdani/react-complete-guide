import React from 'react';

const person = (props) => {
	return (
		<div>
			<p onClick={props.click}>
				Helooooo. I'am {props.name} and Iam {props.age} years old
			</p>
			<p>{props.children}</p>
		</div>
	);
};

export default person;
