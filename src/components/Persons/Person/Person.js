import React, { Component } from 'react';
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

class Person extends Component {
	render() {
		console.log('Person.js Rendering');
		return (
			<StyledDiv>
				<p onClick={this.props.click}>
					Helooooo. I'am {this.props.name} and Iam {this.props.age} years
					old
				</p>
				<p>{this.props.children}</p>
				{/* this.props.children -> show the elements that containing plain text, unorderes list w/ multiple items or beetwen closing tag */}
				<input
					type='text'
					onChange={this.props.changed}
					value={this.props.name}
				/>
			</StyledDiv>
		);
	}
}

export default Person;
