import React from 'react';

function Header(props) {
	const { personal } = props;
	return (
		<div className='preview-header'>
			<div className='header-left'>
				<h2>
					{personal.firstName.trim()} {personal.lastName.trim()}
				</h2>
				<p>{personal.jobTitle.trim()}</p>
			</div>
			<div className='header-right'>
				<p>
					<i className='fas fa-phone'></i>&nbsp;{personal.phoneNumber.trim()}
				</p>
				<p>
					<i className='fas fa-envelope'></i>&nbsp;{personal.email.trim()}
				</p>
				<p>
					<i className='fas fa-map-marker-alt'></i>&nbsp;
					{personal.address.trim()}
				</p>
			</div>
		</div>
	);
}

export default Header;
