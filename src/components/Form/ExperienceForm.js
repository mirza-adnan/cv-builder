import React from 'react';

function ExperienceForm() {
	return (
		<div>
			<div className='field'>
				<label>Position</label>
				<input
					type='text'
					name='position'
					className='text-input'
					placeholder='Position'
					autoComplete='off'
				/>
			</div>
			<div className='field'>
				<label>Company</label>
				<input
					type='text'
					name='company'
					className='text-input'
					placeholder='Company'
					autoComplete='off'
				/>
			</div>
			<div className='field'>
				<label>location</label>
				<input
					type='email'
					name='location'
					className='text-input'
					placeholder='Location'
					autoComplete='off'
				/>
			</div>
			<div className='double-field'>
				<div className='field'>
					<label>From</label>
					<input
						type='text'
						name='from'
						className='text-input'
						placeholder='From'
						autoComplete='off'
					/>
				</div>
				<div className='field'>
					<label>To</label>
					<input
						type='text'
						name='to'
						className='text-input'
						placeholder='To'
						autoComplete='off'
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
