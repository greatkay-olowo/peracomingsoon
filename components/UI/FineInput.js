import React from 'react';

export default function FileInput({
	label,
	type,
	placeholder,
	value,
	onChange,
	error,
}) {
	return (
		<div className='mt-6 w-full'>
			<label className='block text-sm '>{label}</label>
			<input
				type='file'
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className='w-full mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary'
			/>
			{error && (
				<div className='text-red text-xs font-medium mt-2'>{error}</div>
			)}
		</div>
	);
}
