import React from 'react';

function Experience() {
	return (
		<section className='experience'>
			<h2>Experience</h2>
			<div className='field'>
				<label htmlFor='position'>Position</label>
				<input
					type='text'
					name='position'
					class='text-input'
					placeholder='Position'
					autoComplete='off'
					id='position'
				/>
			</div>
			<div className='field'>
				<label htmlFor='company'>Company</label>
				<input
					type='text'
					name='company'
					class='text-input'
					placeholder='Company'
					autoComplete='off'
					id='company'
				/>
			</div>
			<div className='field'>
				<label htmlFor='exp-city'>City</label>
				<input
					type='email'
					name='exp-city'
					class='text-input'
					placeholder='City'
					autoComplete='off'
					id='exp-city'
				/>
			</div>
			<div className='double-field'>
				<div className='field'>
					<label htmlFor='exp-from'>From</label>
					<input
						type='date'
						name='expFrom'
						class='text-input'
						placeholder='From'
						autoComplete='off'
						id='exp-from'
					/>
				</div>
				<div className='field'>
					<label htmlFor='exp-to'>To</label>
					<input
						type='date'
						name='expTo'
						class='text-input'
						placeholder='To'
						autoComplete='off'
						id='exp-to'
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

export default Experience;
