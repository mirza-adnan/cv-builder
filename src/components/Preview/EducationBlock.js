import React from 'react';

function EducationBlock(props) {
	const { education } = props;
	return (
		<div className='exp-block block'>
			<div className='time-range'>
				{education.from}-{education.to}
			</div>
			<div className='block-content'>
				<p>{education.institute}</p>
				<p>{education.location}</p>
				<p>Degree: {education.degree}</p>
				<p>Subject: {education.subject}</p>
			</div>
		</div>
	);
}

export default EducationBlock;
