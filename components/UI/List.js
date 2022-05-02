import React from 'react';

export default function List({
	purpose,
	date,
	amount,
	status,
	accept,
	reject,
	view,
	key,
}) {
	return (
		<div
			key={key}
			className='max-w-4xl mx-auto my-4 rounded-md p-4 shadow-md'>
			<div className='container-md'>
				<div className='flex justify-between'>
					<h4 className='card-title text-lg font-medium '>
						{purpose}
					</h4>
					<p className='card-category text-lg font-medium '>
						{amount.toLocaleString('en-US', {
							style: 'currency',
							currency: 'NGN',
						})}
					</p>
				</div>
				<p className='card-category text-base  text-primary'>{date}</p>
			</div>
		</div>
	);
}
