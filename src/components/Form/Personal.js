import React from 'react';

export default function Personal(props) {
	return (
		<section className='personal-info'>
			<h2>Personal Information</h2>
			<div className='double-field'>
				<div className='field'>
					<label htmlFor='firstName'>First Name</label>
					<input
						type='text'
						name='firstName'
						class='text-input'
						placeholder='First Name'
						autoComplete='off'
						id='firstName'
					/>
				</div>
				<div className='field'>
					<label htmlFor='lastName'>Last Name</label>
					<input
						type='text'
						name='lastName'
						class='text-input'
						placeholder='Last Name'
						autoComplete='off'
						id='lastName'
					/>
				</div>
			</div>
			<div className='field'>
				<label htmlFor='jobTitle'>Job Title</label>
				<input
					type='text'
					name='jobTitle'
					class='text-input'
					placeholder='Job Title'
					autoComplete='off'
					id='jobTitle'
				/>
			</div>
			<div className='field'>
				<label htmlFor='phoneNumber'>Phone Number</label>
				<input
					type='text'
					name='phoneNumber'
					class='text-input'
					placeholder='Phone Number'
					autoComplete='off'
					id='phoneNumber'
				/>
			</div>
			<div className='field'>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					name='email'
					class='text-input'
					placeholder='Email'
					autoComplete='off'
					id='email'
				/>
			</div>
			<div className='field'>
				<label htmlFor='address'>Address</label>
				<input
					type='text'
					name='address'
					class='text-input'
					placeholder='Address'
					autoComplete='off'
					id='address'
				/>
			</div>
			<div className='field'>
				<label htmlFor='description'>Description</label>
				<textarea
					name='description'
					id='description'
					cols='30'
					rows='6'
					placeholder='Describe yourself briefly'></textarea>
			</div>
		</section>
	);
}
