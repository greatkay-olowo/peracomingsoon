import React from 'react';
import Input from '../UI/input';
import { CgPushChevronRight } from 'react-icons/cg';
import { useRouter } from 'next/router';
export default function NewApplication1() {
	return (
		<>
			<h4 className='font-medium'>Application Information</h4>
			<div className='mt-4'>
				<label className='block text-sm'>Bank Statement</label>
				<input
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary'
				/>
			</div>
			<div className='flex justify-end mt-5'>
				<button
					className='flex justify-between bg-primary text-white px-4 py-2 rounded  hover:bg-accent hover:text-primary hover:font-bold w-1/2'
					onClick={() => setShowModal(false)}>
					<span>Next </span>
					<span>
						<CgPushChevronRight className='text-2xl' />
					</span>
				</button>
			</div>
		</>
	);
}
