import React from 'react';

function EducationForm() {
	return (
		<div>
			<div className='field'>
				<label>Institution Name</label>
				<input
					type='text'
					name='institute'
					className='text-input'
					placeholder='Institution Name'
					autoComplete='off'
				/>
			</div>
			<div className='field'>
				<label>Location</label>
				<input
					type='text'
					name='location'
					className='text-input'
					placeholder='Location'
					autoComplete='off'
				/>
			</div>
			<div className='field'>
				<label>Degree</label>
				<input
					type='email'
					name='degree'
					className='text-input'
					placeholder='Degree'
					autoComplete='off'
				/>
			</div>
			<div className='field'>
				<label>Subject</label>
				<input
					type='text'
					name='subject'
					className='text-input'
					placeholder='Subject'
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

export default EducationForm;
