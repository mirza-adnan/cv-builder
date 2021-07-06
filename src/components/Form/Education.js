import React from 'react';

function Education(props) {
	return (
		<section className='education'>
			<h2>Education</h2>
			<div className='field'>
				<label htmlFor='institute'>Institution Name</label>
				<input
					type='text'
					name='institute'
					class='text-input'
					placeholder='Institution Name'
					autoComplete='off'
					id='institute'
				/>
			</div>
			<div className='field'>
				<label htmlFor='city'>City</label>
				<input
					type='text'
					name='city'
					class='text-input'
					placeholder='City'
					autoComplete='off'
					id='city'
				/>
			</div>
			<div className='field'>
				<label htmlFor='degree'>Degree</label>
				<input
					type='email'
					name='degree'
					class='text-input'
					placeholder='Degree'
					autoComplete='off'
					id='degree'
				/>
			</div>
			<div className='field'>
				<label htmlFor='subject'>Subject</label>
				<input
					type='text'
					name='subject'
					class='text-input'
					placeholder='Subject'
					autoComplete='off'
					id='subject'
				/>
			</div>
			<div className='double-field'>
				<div className='field'>
					<label htmlFor='from'>From</label>
					<input
						type='text'
						name='from'
						class='text-input'
						placeholder='From'
						autoComplete='off'
						id='from'
					/>
				</div>
				<div className='field'>
					<label htmlFor='to'>To</label>
					<input
						type='text'
						name='to'
						class='text-input'
						placeholder='To'
						autoComplete='off'
						id='to'
					/>
				</div>
			</div>
			<div className='buttons'>
				<button className='btn add-btn'>Add</button>
				<button className='btn delete-btn'>Delete</button>
			</div>
		</section>
	);
}

export default Education;
