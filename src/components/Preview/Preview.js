import React, { Component } from 'react';
import Header from './Header';
import PrevPersonal from './PrevPersonal';

export class Preview extends Component {
	render() {
		return (
			<div className='preview'>
				<Header />
				<div className='preview-main'>
					<PrevPersonal />
				</div>
			</div>
		);
	}
}

export default Preview;
