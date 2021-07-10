import React from 'react';
import Header from './Header';
import EducationBlock from './EducationBlock';
import ExperienceBlock from './ExperienceBlock';

function Preview(props) {
	const { personal, education, experience } = props;
	const educationBlocks = education.map((block) => {
		return <EducationBlock key={block.id} education={block} />;
	});
	const experienceBlocks = experience.map((block) => {
		return <ExperienceBlock key={block.id} experience={block} />;
	});
	return (
		<div className='preview'>
			<Header personal={personal} />
			<div className='preview-main'>
				<section className='preview-section'>
					<h3>Description</h3>
					<p className='description'>{personal.description.trim()}</p>
				</section>
				<section className='preview-section'>
					<h3>Education</h3>
					{educationBlocks}
				</section>
				<section className='preview-section'>
					<h3>Experience</h3>
					{experienceBlocks}
				</section>
			</div>
		</div>
	);
}

export default Preview;
