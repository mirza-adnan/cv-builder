import React from 'react';
import Personal from './Personal';
import Experience from './Experience';

export default function Form(props) {
	return (
		<form className='cv-form'>
			<Personal />
			<Experience />
		</form>
	);
}
