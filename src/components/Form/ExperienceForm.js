import React from 'react';

function ExperienceForm() {
	return (
		<div>
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
				<label htmlFor='city'>location</label>
				<input
					type='email'
					name='location'
					class='text-input'
					placeholder='Location'
					autoComplete='off'
					id='location'
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
		</div>
	);
}

export default ExperienceForm;