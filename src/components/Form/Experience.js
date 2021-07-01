import React from 'react';

function Experience() {
	return (
		<section className='experience'>
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
					<label htmlFor='edu-from'>From</label>
					<input
						type='date'
						name='eduFrom'
						class='text-input'
						placeholder='From'
						autoComplete='off'
						id='edu-from'
					/>
				</div>
				<div className='field'>
					<label htmlFor='edu-to'>To</label>
					<input
						type='date'
						name='eduTo'
						class='text-input'
						placeholder='To'
						autoComplete='off'
						id='edu-to'
					/>
				</div>
			</div>
		</section>
	);
}

export default Experience;
