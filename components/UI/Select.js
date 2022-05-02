import React from 'react';

export default function Select({
	label,
	type,
	placeholder,
	value,
	onChange,
	error,
	options,
}) {
	return (
		<div className='mt-6 w-full'>
			<label className='block text-sm '>{label}</label>
			<select
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary'>
				<option key={''}></option>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
			{error && (
				<div className='text-red text-xs font-medium mt-2'>{error}</div>
			)}
		</div>
	);
}
