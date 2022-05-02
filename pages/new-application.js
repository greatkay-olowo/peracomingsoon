import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import ButtonUI from '../components/UI/Button';
import InputUI from '../components/UI/Input';
import Select from '../components/UI/Select';
import AppContainer from '../components/Container';
import NaijaStates from 'naija-state-local-government';
import ModalContainer from '../components/ModalContainer';
import FileInput from '../components/UI/FineInput';

export default function NewApplication() {
	const router = useRouter();

	const [employmentType, setEmploymentType] = useState('self-employed');
	return (
		<AppContainer>
			<ModalContainer />
			<div className='rounded m-auto my-2 max-w-3xl	'>
				<div className='mt-4'>
					<h3 className='text-2xl font-bold text-center'>
						Apply for a loan
					</h3>

					<p className='text-lg font-bold text-left mt-8'>
						Loan Information
					</p>
					<form action=''>
						<div className='mt-2'>
							<div className='sm:flex sm:gap-5'>
								<InputUI
									label='Loan Amount'
									type='number'
									placeholder='How much loan do you want?'
									error={''}
								/>
								<InputUI
									label='Tenure'
									type='number'
									placeholder='How many months do you want the loan for?'
									error={''}
								/>
							</div>
							<p className='text-lg font-bold text-left mt-14'>
								Loan Purpose
							</p>
							<div className='sm:flex sm:gap-5'>
								<Select
									options={['Land', 'Building', 'Flat']}
									label='Property Type'
									error={''}
								/>
								<Select
									options={NaijaStates.states()}
									label='Property State'
									error={''}
								/>
								<Select
									options={NaijaStates.lgas('Oyo').lgas}
									label='Property LGA'
									error={''}
								/>
							</div>
							<p className='text-lg font-bold text-left mt-14'>
								Employment Information
							</p>
							<div className='sm:flex sm:gap-5'>
								<div className='flex items-center'>
									<div className='flex items-center mb-4'>
										<input
											id='self-employed'
											type='radio'
											value='self-employed'
											name='employment-status'
											checked={
												employmentType ===
												'self-employed'
											}
											onChange={(e) =>
												setEmploymentType(
													e.target.value
												)
											}
											className='mt-6 w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary focus:ring-2 dark:bg-gray-700 '
										/>
										<label
											htmlFor='self-employed'
											className='mt-6 ml-2 text-sm font-medium'>
											Self Employed
										</label>
									</div>
								</div>{' '}
								<div className='flex items-center mb-4'>
									<input
										id='salary-earner'
										type='radio'
										value='salary-earner'
										name='employment-status'
										checked={
											employmentType === 'salary-earner'
										}
										onChange={(e) =>
											setEmploymentType(e.target.value)
										}
										className='mt-6 w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary '
									/>
									<label
										htmlFor='salary-earner'
										className='mt-6  ml-2 text-sm font-medium'>
										Salary Earner
									</label>
								</div>
							</div>
							{employmentType === 'self-employed' && (
								<div className='sm:flex sm:gap-5'>
									<InputUI
										label='Name of Business'
										type='text'
										placeholder='The name on your registration certificate'
										error={''}
									/>
									<InputUI
										label='Monthly Turnover'
										type='text'
										placeholder='The amount you sell every month'
										error={''}
									/>
								</div>
							)}
							{employmentType === 'salary-earner' && (
								<div className='sm:flex sm:gap-5'>
									<InputUI
										label='Name of Employer'
										type='text'
										placeholder='The name of the company you work for'
										error={''}
									/>
									<InputUI
										label='Monthly Net Salary'
										type='text'
										placeholder='The amount you get paid every month'
										error={''}
									/>
								</div>
							)}
						</div>
						<div className='sm:flex sm:gap-5'>
							<InputUI
								label='BVN'
								type='text'
								placeholder='We need this to confirm your identity'
								error={''}
							/>
							<InputUI
								label='Since when you work here'
								type='date'
								placeholder='The amount you get paid every month'
								error={''}
							/>
						</div>
						<p className='text-lg font-bold text-left mt-14'>
							Documents
						</p>
						<div className='sm:flex sm:gap-5'>
							<FileInput
								label='Government Issued ID'
								error={''}
							/>

							{employmentType === 'self-employed' ? (
								<FileInput
									label='CAC Certificate'
									placeholder='The amount you get paid every month'
									error={''}
								/>
							) : (
								<FileInput
									label='Employment or Confirmation Letter'
									placeholder='The amount you get paid every month'
									error={''}
								/>
							)}
						</div>

						<div className='sm:flex sm:gap-5'>
							<FileInput
								label='Latest 6 months bank statment'
								placeholder='The amount you get paid every month'
								error={''}
							/>
							<InputUI
								label='Password to bank statement (if any)'
								type='text'
								placeholder='Does your bank statement have a password?'
								error={''}
							/>
						</div>

						<div className=' mt-5 mb-16 w-full flex flex-col sm:flex-row justify-around'>
							<div className='mt-8'>
								<button
									className='text-primary text-lg  px-4 py-2 rounded hover:bg-accent w-80'
									onClick={() => {}}>
									save
								</button>
							</div>
							<ButtonUI
								text='Submit'
								onClick={() => router.push('/')}
							/>
						</div>
					</form>
				</div>
			</div>
		</AppContainer>
	);
}
