import React from 'react';
import ExperienceForm from './ExperienceForm';

function Experience() {
	return (
		<section className='experience'>
			<h2>Experience</h2>
			<div className='buttons'>
				<button className='btn add-btn'>Add</button>
			</div>
			<ExperienceForm />
		</section>
	);
}

export default Experience;
