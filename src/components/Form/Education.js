import React from 'react';
import EducationForm from './EducationForm';

function Education(props) {
	const { education, handleChange, handleAdd, handleDelete } = props;
	const educationElements = education.map((object, index) => {
		return (
			<EducationForm
				key={object.id}
				id={object.id}
				education={object}
				handleChange={handleChange}
				handleAdd={handleAdd}
				handleDelete={handleDelete}
				isLast={index === education.length - 1}
			/>
		);
	});
	return (
		<section className='education'>
			<h2>Education</h2>
			{education.length === 0 ? (
				<div className='buttons'>
					<button className='btn add-btn' onClick={handleAdd}>
						Add
					</button>
				</div>
			) : null}
			{educationElements}
		</section>
	);
}

export default Education;
