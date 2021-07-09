import React from 'react';

export default function Personal(props) {
	const { personal, handleChange } = props;
	return (
		<section className='personal-info'>
			<h2>Personal Information</h2>
			<div className='double-field'>
				<div className='field'>
					<label htmlFor='firstName'>First Name</label>
					<input
						type='text'
						name='firstName'
						className='text-input'
						placeholder='First Name'
						autoComplete='off'
						id='firstName'
						value={personal.firstName}
						onChange={handleChange}
					/>
				</div>
				<div className='field'>
					<label htmlFor='lastName'>Last Name</label>
					<input
						type='text'
						name='lastName'
						className='text-input'
						placeholder='Last Name'
						autoComplete='off'
						id='lastName'
						value={personal.lastName}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className='field'>
				<label htmlFor='jobTitle'>Job Title</label>
				<input
					type='text'
					name='jobTitle'
					className='text-input'
					placeholder='Job Title'
					autoComplete='off'
					id='jobTitle'
					value={personal.jobTitle}
					onChange={handleChange}
				/>
			</div>
			<div className='field'>
				<label htmlFor='phoneNumber'>Phone Number</label>
				<input
					type='text'
					name='phoneNumber'
					className='text-input'
					placeholder='Phone Number'
					autoComplete='off'
					id='phoneNumber'
					value={personal.phoneNumber}
					onChange={handleChange}
				/>
			</div>
			<div className='field'>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					name='email'
					className='text-input'
					placeholder='Email'
					autoComplete='off'
					id='email'
					value={personal.email}
					onChange={handleChange}
				/>
			</div>
			<div className='field'>
				<label htmlFor='address'>Address</label>
				<input
					type='text'
					name='address'
					className='text-input'
					placeholder='Address'
					autoComplete='off'
					id='address'
					value={personal.address}
					onChange={handleChange}
				/>
			</div>
			<div className='field'>
				<label htmlFor='description'>Description</label>
				<textarea
					name='description'
					id='description'
					cols='30'
					rows='6'
					placeholder='Describe yourself briefly'
					value={personal.description}
					onChange={handleChange}></textarea>
			</div>
		</section>
	);
}
