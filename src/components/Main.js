import React, { Component } from 'react';
import Form from './Form/Form';
import Preview from './Preview/Preview';

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
			flip: false,
		};
	}

	render() {
		return (
			<main>
				<div className='flip-container'>
					<div className='front'>
						<Form />
					</div>
					<div className='back'>
						<Preview />
					</div>
				</div>
			</main>
		);
	}
}

export default Main;
