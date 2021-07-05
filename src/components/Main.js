import React, { Component } from 'react';
import Form from './Form/Form';

export class Main extends Component {
	constructor() {
		super();
		this.state = {
			personal: {},
			education: [],
			experience: [],
		};
	}
	render() {
		return (
			<main>
				<Form />
			</main>
		);
	}
}

export default Main;
