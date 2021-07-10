import React from 'react';

function ExperienceBlock(props) {
	const { experience } = props;
	return (
		<div className='edu-block block'>
			<div className='time-range'>
				{experience.from.trim()}-{experience.to.trim()}
			</div>
			<div className='block-content'>
				<p>{experience.position.trim()}</p>
				<p>{experience.company.trim()}</p>
				<p>{experience.location.trim()}</p>
			</div>
		</div>
	);
}

export default ExperienceBlock;
