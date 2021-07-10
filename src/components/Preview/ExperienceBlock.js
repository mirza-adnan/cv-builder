import React from 'react';

function ExperienceBlock(props) {
	const { experience } = props;
	return (
		<div className='edu-block block'>
			<div className='time-range'>
				{experience.from}-{experience.to}
			</div>
			<div className='block-content'>
				<p>{experience.position}</p>
				<p>{experience.company}</p>
				<p>{experience.location}</p>
			</div>
		</div>
	);
}

export default ExperienceBlock;
