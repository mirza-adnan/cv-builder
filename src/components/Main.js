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
		this.handleChangeEducation = this.handleChangeEducation.bind(this);
		this.handleAddEducation = this.handleAddEducation.bind(this);
		this.handleDeleteEducation = this.handleDeleteEducation.bind(this);
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

	handleChangeEducation(e, id) {
		e.preventDefault();
		const { name, value } = e.target;
		const newEducationArray = this.state.education.map((educationObj) => {
			if (educationObj.id === id) {
				return {
					...educationObj,
					[name]: value,
				};
			}
			return educationObj;
		});
		this.setState({
			education: newEducationArray,
		});
	}

	handleAddEducation() {
		const newEducationObj = {
			institute: '',
			city: '',
			degree: '',
			subject: '',
			from: '',
			to: '',
			id: uniqid(),
		};
		this.setState({
			education: this.state.education.concat(newEducationObj),
		});
	}

	handleDeleteEducation(id) {
		const newEducationArray = this.state.education.filter(
			(educationObj) => educationObj.id !== id
		);
		this.setState({
			education: newEducationArray,
		});
	}

	render() {
		return (
			<main>
				<div className='flip-container'>
					<div className='front'>
						<Form
							personal={this.state.personal}
							handleChangePersonal={this.handleChangePersonal}
							education={this.state.education}
							handleChangeEducation={this.handleChangeEducation}
							handleAddEducation={this.handleAddEducation}
							handleDeleteEducation={this.handleDeleteEducation}
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
