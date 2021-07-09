import React from 'react';
import EducationForm from './EducationForm';

function Education(props) {
	return (
		<section className='education'>
			<h2>Education</h2>
			<div className='buttons'>
				<button className='btn add-btn'>Add</button>
			</div>
			<EducationForm />
		</section>
	);
}

export default Education;
