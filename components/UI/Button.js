import React from 'react';

export default function ButtonUI({ text, onClick }) {
	return (
		<div className='mt-8'>
			<button
				className='bg-primary text-white px-4 py-2 rounded hover:shadow-lg w-80 text-center'
				onClick={onClick}>
				{text}
			</button>
		</div>
	);
}
