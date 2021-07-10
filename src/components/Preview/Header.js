import React from 'react';

function Header(props) {
	const { personal } = props;
	return (
		<div className='preview-header'>
			<div className='header-left'>
				<h2>
					{personal.firstName} {personal.lastName}
				</h2>
				<p>{personal.jobTitle}</p>
			</div>
			<div className='header-right'>
				<p>
					<i className='fas fa-phone'></i>&nbsp;{personal.phoneNumber}
				</p>
				<p>
					<i className='fas fa-envelope'></i>&nbsp;{personal.email}
				</p>
				<p>
					<i className='fas fa-map-marker-alt'></i>&nbsp;{personal.address}
				</p>
			</div>
		</div>
	);
}

export default Header;
