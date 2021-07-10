import React from 'react';

export default function Header(props) {
	const { handleFlip } = props;
	return (
		<header>
			<div className='logo'>
				<i className='far fa-file-alt'></i>
				<h1>CV Builder</h1>
			</div>
			<button className='flip-button btn' onClick={handleFlip}>
				<span className='material-icons'>flip_camera_android</span>
			</button>
		</header>
	);
}
