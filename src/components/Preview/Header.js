import React from 'react';

function Header() {
	return (
		<div className='preview-header'>
			<div className='header-left'>
				<h2>First Last</h2>
				<p>Job Title</p>
			</div>
			<div className='header-right'>
				<p>
					<i className='fas fa-phone'></i>&nbsp;1223765981
				</p>
				<p>
					<i className='fas fa-envelope'></i>&nbsp;abc@email.com
				</p>
				<p>
					<i className='fas fa-map-marker-alt'></i>&nbsp;XYZ, ABC
				</p>
			</div>
		</div>
	);
}

export default Header;
