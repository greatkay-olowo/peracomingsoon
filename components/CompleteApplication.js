import React, { useState } from 'react';
import Link from 'next/link';
import { CgAdd } from 'react-icons/cg';
import { CgClose } from 'react-icons/cg';
import { CgPushChevronRight } from 'react-icons/cg';
import { CgPushChevronLeft } from 'react-icons/cg';
import Button from './UI/input';
import ProtectedRoute from './ProtectedRoute';
import Input from './UI/input';

const CompleteApplication = () => {
	const [showModal, setShowModal] = useState(false);
	const [level, setLevels] = useState(1);
	const [employmentType, setEmploymentType] = useState('');

	return (
		<>
			<button
				onClick={() => {
					setShowModal(!showModal);
				}}
				className=' transition flex my-auto w-full shadow rounded p-2 bg-primary h-20 justify-around cursor-pointer text-white hover:bg-accent hover:text-primary mb-3 hover:shadow-none'>
				<div className='flex my-auto '>
					<CgAdd className='text-2xl' />
					<span className='font-medium ml-3'>New Application</span>
				</div>
			</button>

			{showModal ? (
				<>
					<div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white'>
						<div className='container relative mx-auto max-w-[640px] px-2 sm:px-0 '>
							<div className=' border border-primary rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none mt-10'>
								<div className='flex items-start justify-between p-5 border-b border-solid border-primary bg-accent rounded-t '>
									<h3 className='text-center font-bold '>
										Complete Application For
									</h3>
									<button
										className='bg-transparent  text-black float-right '
										onClick={() => setShowModal(false)}>
										<span className='text-black opacity-7 h-6 w-6 block bg-gray-400 py-0 rounded-full text-2xl hover:text-primary'>
											<CgClose />
										</span>
									</button>
								</div>
								<div className='relative p-6 flex-auto'>
									{level === 1 ? (
										<>
											<h5 className='font-medium'>
												Application Information
											</h5>

											<Input
												label={'Loan Amount'}
												type={'text'}
												placeholder={
													'The amount of the loan you are applying for'
												}
												value={''}
												onChange={() => {}}
											/>
											<Input
												label={'Tenure'}
												type={'number'}
												placeholder={
													'How many months do you want to pay back the loan?'
												}
												value={''}
												onChange={() => {}}
											/>
											<Input
												label={'Loan Purpose'}
												type={'text'}
												placeholder={
													'What do you want the loan to buy?'
												}
												value={''}
												onChange={() => {}}
											/>
											<div className='mt-4'>
												<label className='block text-sm'>
													Type of Employment
												</label>
												<select
													value={employmentType}
													onChange={(e) =>
														setEmploymentType(
															e.target.value
														)
													}
													className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary'>
													<option hidden></option>
													<option value='Salary Earner'>
														Salary Earner
													</option>
													<option value='Self Employed'>
														Self Employed
													</option>
												</select>
											</div>
											{employmentType ===
											'Salary Earner' ? (
												<Input
													label={'Net Monthly Salary'}
													type={'text'}
													placeholder={
														'How much do you get paid monthly?'
													}
													value={''}
													onChange={() => {}}
												/>
											) : (
												<Input
													label={
														'Average Monthly Inflow to bank account'
													}
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
													onClick={() =>
														setLevels(2)
													}>
													<span>Next </span>
													<span>
														<CgPushChevronRight className='text-2xl' />
													</span>
												</button>
											</div>
										</>
									) : (
										<>
											<h5 className='font-medium'>
												Application Documents
											</h5>
											<div className='mt-10'>
												<label className='block text-sm w-1/2'>
													Bank Statement
												</label>
												<input
													type='file'
													className='py-2 mt-2 focus:outline-none focus:ring-1 ring-none '
												/>
											</div>
											<div className='mt-10'>
												<label className='block text-sm w-1/2'>
													ID Card
												</label>
												<input
													type='file'
													className='py-2 mt-2 focus:outline-none focus:ring-1 ring-none '
												/>
											</div>
											<div className='flex mt-5 justify-between'>
												<button
													className='flex justify-between text-primary px-4 py-2 rounded  hover:bg-accent hover:text-primary font-bold '
													onClick={() =>
														setLevels(1)
													}>
													<span>
														<CgPushChevronLeft className='text-2xl' />
													</span>
													<span>Back </span>
												</button>
												<button
													className='flex justify-between bg-primary text-white px-4 py-2 rounded  hover:bg-accent hover:text-primary hover:font-bold '
													onClick={() =>
														setLevels(2)
													}>
													<span>Save </span>
												</button>
											</div>
										</>
									)}
								</div>
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	);
};

export default CompleteApplication;
