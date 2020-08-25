import React from 'react';
import './Person.css';

import styled from 'styled-components';

const StyledDiv = styled.div`
	width: 60%;
	margin: auto;
	border: 1px solid #eee;
	box-shadow: 0 2px 2px #ccc;
	padding: 16px;
	text-align: center;

	@media (min-width: 500px) {
		width: 450px;
	}
`;

const person = (props) => {
	return (
		<StyledDiv>
			<p onClick={props.click}>
				Helooooo. I'am {props.name} and Iam {props.age} years old
			</p>
			<p>{props.children}</p>
			{/* props.children -> show the elements that containing plain text, unorderes list w/ multiple items or beetwen closing tag */}
			<input type='text' onChange={props.changed} value={props.name} />
		</StyledDiv>
	);
};

export default person;
