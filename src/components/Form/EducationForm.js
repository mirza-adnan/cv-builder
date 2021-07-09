import React from 'react';

function EducationForm(props) {
	const { id, education, handleChange, handleAdd, handleDelete, isLast } =
		props;
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
					value={education.institute}
					onChange={(e) => handleChange(e, id)}
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
					value={education.location}
					onChange={(e) => handleChange(e, id)}
				/>
			</div>
			<div className='field'>
				<label>Degree</label>
				<input
					type='text'
					name='degree'
					className='text-input'
					placeholder='Degree'
					autoComplete='off'
					value={education.degree}
					onChange={(e) => handleChange(e, id)}
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
					value={education.subject}
					onChange={(e) => handleChange(e, id)}
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
						value={education.from}
						onChange={(e) => handleChange(e, id)}
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
						value={education.to}
						onChange={(e) => handleChange(e, id)}
					/>
				</div>
			</div>
			<div className='buttons'>
				{isLast ? (
					<button className='btn add-btn' onClick={handleAdd}>
						Add
					</button>
				) : null}
				<button className='btn delete-btn' onClick={() => handleDelete(id)}>
					Delete
				</button>
			</div>
		</div>
	);
}

export default EducationForm;
