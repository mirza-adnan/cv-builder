import React, { Component } from 'react';
import Form from './Form/Form';
import Preview from './Preview/Preview';
import uniqid from 'uniqid';

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
					id: uniqid(),
				},
			],
			experience: [
				{
					position: '',
					company: '',
					city: '',
					from: '',
					to: '',
					id: uniqid(),
				},
			],
			flip: false,
		};
		this.handleChangePersonal = this.handleChangePersonal.bind(this);
	}

	handleChangePersonal(e) {
		const { name, value } = e.target;
		this.setState({
			personal: {
				...this.state.personal,
				[name]: value,
			},
		});
	}

	handleChangeEducation(e, id) {}

	render() {
		return (
			<main>
				<div className='flip-container'>
					<div className='front'>
						<Form
							personal={this.state.personal}
							handleChangePersonal={this.handleChangePersonal}
						/>
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
