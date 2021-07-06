import React, { Component } from 'react';
import Form from './Form/Form';

export class Main extends Component {
	constructor() {
		super();
		this.state = {
			personal: {
				firstName: '',
				lastName: '',
				jobTitle: '',
				phoneNumber: '',
				email: '',
				address: '',
				description: '',
			},
			education: [
				{
					institute: '',
					city: '',
					degree: '',
					subject: '',
					from: '',
					to: '',
				},
			],
			experience: [
				{
					position: '',
					company: '',
					city: '',
					from: '',
					to: '',
				},
			],
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
