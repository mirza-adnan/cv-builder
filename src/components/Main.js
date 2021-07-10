import React, { Component } from 'react';
import Form from './Form/Form';
import Preview from './Preview/Preview';
import uniqid from 'uniqid';

export class Main extends Component {
	constructor(props) {
		super(props);
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
					location: '',
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
					location: '',
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
		this.handleChangeExperience = this.handleChangeExperience.bind(this);
		this.handleAddExperience = this.handleAddExperience.bind(this);
		this.handleDeleteExperience = this.handleDeleteExperience.bind(this);
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
			location: '',
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

	handleChangeExperience(e, id) {
		const { name, value } = e.target;
		const newExperienceArray = this.state.experience.map((experienceObj) => {
			if (experienceObj.id === id) {
				return {
					...experienceObj,
					[name]: value,
				};
			}
			return experienceObj;
		});
		this.setState({
			experience: newExperienceArray,
		});
	}

	handleAddExperience() {
		const newExperienceObj = {
			position: '',
			company: '',
			location: '',
			from: '',
			to: '',
			id: uniqid(),
		};
		this.setState({
			experience: this.state.experience.concat(newExperienceObj),
		});
	}

	handleDeleteExperience(id) {
		const newExperienceArray = this.state.experience.filter(
			(educationObj) => educationObj.id !== id
		);
		this.setState({
			experience: newExperienceArray,
		});
	}

	render() {
		const { flip } = this.props;

		const className = flip ? 'flip-container flipped' : 'flip-container';
		return (
			<main>
				<div className={className}>
					<div className='front'>
						<Form
							personal={this.state.personal}
							handleChangePersonal={this.handleChangePersonal}
							education={this.state.education}
							handleChangeEducation={this.handleChangeEducation}
							handleAddEducation={this.handleAddEducation}
							handleDeleteEducation={this.handleDeleteEducation}
							experience={this.state.experience}
							handleChangeExperience={this.handleChangeExperience}
							handleAddExperience={this.handleAddExperience}
							handleDeleteExperience={this.handleDeleteExperience}
						/>
					</div>
					<div className='back'>
						<Preview
							personal={this.state.personal}
							education={this.state.education}
							experience={this.state.experience}
						/>
					</div>
				</div>
			</main>
		);
	}
}

export default Main;
