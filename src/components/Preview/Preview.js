import React, { Component } from 'react';
import Header from './Header';
import EducationBlock from './EducationBlock';
import ExperienceBlock from './ExperienceBlock';

import React from 'react'

function Preview(props) {

    return (
        <div className='preview'>
				<Header />
				<div className='preview-main'>
					<section className='preview-section'>
						<h3>Description</h3>
						<p className='description'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
							esse, pariatur necessitatibus ratione quas laboriosam sit in nam
							architecto sapiente?
						</p>
					</section>
					<section className='preview-section'>
						<h3>Education</h3>
						<EducationBlock />
						<EducationBlock />
					</section>
					<section className='preview-section'>
						<h3>Experience</h3>
						<ExperienceBlock />
						<ExperienceBlock />
						<ExperienceBlock />
					</section>
				</div>
			</div>
    )
}

export default Preview


export default Preview;
