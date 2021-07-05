import React from 'react';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';

export default function Form(props) {
	return (
		<form className='cv-form'>
			<Personal />
			<Education />
			<Experience />
		</form>
	);
}
