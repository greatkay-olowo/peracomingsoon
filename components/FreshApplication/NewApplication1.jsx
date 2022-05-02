import React, { useState } from 'react';
import InputUI from '../UI/input';
import { CgPushChevronRight } from 'react-icons/cg';
import { useRouter } from 'next/router';
export default function NewApplication1() {
	const [employmentType, setEmploymentType] = useState('');
	return (
		<>
			<h4 className='font-medium'>Application Information</h4>

			<InputUI
				label={'Loan Amount'}
				type={'text'}
				placeholder={'The amount of the loan you are applying for'}
				value={''}
				onChange={() => {}}
			/>
			<InputUI
				label={'Tenure'}
				type={'number'}
				placeholder={
					'How many months do you want to pay back the loan?'
				}
				value={''}
				onChange={() => {}}
			/>
			<InputUI
				label={'Loan Purpose'}
				type={'text'}
				placeholder={'What do you want the loan to buy?'}
				value={''}
				onChange={() => {}}
			/>
			<div className='mt-4'>
				<label className='block text-sm'>Type of Employment</label>
				<select
					value={employmentType}
					onChange={(e) => setEmploymentType(e.target.value)}
					className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary'>
					<option hidden></option>
					<option value='Salary Earner'>Salary Earner</option>
					<option value='Self Employed'>Self Employed</option>
				</select>
			</div>
			{employmentType === 'Salary Earner' ? (
				<InputUI
					label={'Net Monthly Salary'}
					type={'text'}
					placeholder={'How much do you get paid monthly?'}
					value={''}
					onChange={() => {}}
				/>
			) : (
				<InputUI
					label={'Average Monthly Inflow to bank account'}
					type={'text'}
					placeholder={
						'How much do you get paid into your bank account monthly?'
					}
					value={''}
					onChange={() => {}}
				/>
			)}

			<div className='flex mt-5 justify-end'>
				<button
					className='flex justify-between bg-primary text-white px-4 py-2 rounded  hover:bg-accent hover:text-primary hover:font-bold '
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
