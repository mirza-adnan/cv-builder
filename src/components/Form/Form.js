import React from 'react';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';

function Form(props) {
	const {
		personal,
		handleChangePersonal,
		education,
		handleChangeEducation,
		handleAddEducation,
		handleDeleteEducation,
	} = props;
	return (
		<div className='cv-form'>
			<Personal personal={personal} handleChange={handleChangePersonal} />
			<Education
				education={education}
				handleChange={handleChangeEducation}
				handleAdd={handleAddEducation}
				handleDelete={handleDeleteEducation}
			/>
			<Experience />
		</div>
	);
}

export default Form;
