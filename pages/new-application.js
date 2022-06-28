import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import ButtonUI from '../components/UI/Button';
import InputUI from '../components/UI/Input';
import Select from '../components/UI/Select';
import AppContainer from '../components/Container';
import NaijaStates from 'naija-state-local-government';
import FileInput from '../components/UI/FineInput';
import AuthContainer from '../components/authContainer';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function NewApplication() {
	const router = useRouter();
	const [firstname, setFirstName] = useState();
	const [surname, setSurname] = useState();
	const [dob, setDob] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();
	const [bvn, setBvn] = useState();
	const [residentialState, setResidentialState] = useState('Lagos');
	const [residentialLga, setResidentialLga] = useState();
	const [loanAmount, setLoanAmount] = useState();
	const [tenure, setTenure] = useState();
	const [loanPurpose, setLoanPurpose] = useState();
	const [propertyState, setPropertyState] = useState('Lagos');
	const [propertyLga, setPropertyLga] = useState();
	const [propertyValue, setPropertyValue] = useState();
	const [employmentType, setEmploymentType] = useState('self-employed');
	const [businessName, setBusinessName] = useState();
	const [turnover, setTurnover] = useState();
	const [employer, setEmployer] = useState();
	const [salary, setSalary] = useState();
	const [employmentMonth, setEmploymentMonth] = useState();
	const [isLoading, setIsLoading] = useState(false);

	const submit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		const payload = {
			application: {
				firstname: firstname,
				email: email,
				surname: surname,
				dob: dob,
				phone: phone,
				bvn: bvn,
				residentialState: residentialState,
				residentialLga: residentialLga,
				loanAmount: loanAmount,
				tenure: tenure,
				loanPurpose: loanPurpose,
				propertyState: propertyState,
				propertyLga: propertyLga,
				propertyValue: propertyValue,
				employmentType: employmentType,
				businessName: businessName,
				turnover: turnover,
				employer: employer,
				salary: salary,
				employmentMonth: employmentMonth,
			},
		};
		try {
			const response = await axios.post(
				`https://develop-backend-pera.onrender.com/api/v1/application`,
				payload,
				{
					headers: {
						authorization: 'bearer ' + Cookies.get('accessToken'),
					},
				}
			);
			if (response.status === 201) {
				router.push('/');
				setIsLoading(false);
			}
			setIsLoading(false);
		} catch (error) {
			alert(error.response.data.message.error);
			setIsLoading(false);
		}
	};
	return (
		<AuthContainer>
			<AppContainer>
				<div className='rounded m-auto my-2 max-w-3xl	'>
					<div className='mt-4'>
						<p className='text-lg font-bold text-left mt-8'>
							Personal Information
						</p>
						<form action=''>
							<div className='mt-2'>
								<div className='sm:flex sm:gap-5'>
									<InputUI
										label='First Name'
										type='text'
										placeholder='First Name'
										value={firstname}
										onChange={(e) =>
											setFirstName(e.target.value)
										}
									/>
									<InputUI
										label='Surname'
										type='text'
										placeholder='Surname'
										value={surname}
										onChange={(e) =>
											setSurname(e.target.value)
										}
									/>
								</div>
								<div className='sm:flex sm:gap-5'>
									<InputUI
										label='Date of Bith'
										type='date'
										placeholder='dd-mm-yyyy'
										value={dob}
										onChange={(e) => setDob(e.target.value)}
									/>
									<InputUI
										label='Phone Number'
										type='tel'
										placeholder='Enter Phone Number'
										value={phone}
										onChange={(e) =>
											setPhone(e.target.value)
										}
									/>
								</div>
								<div className='sm:flex sm:gap-5'>
									<InputUI
										label='Email'
										type='email'
										placeholder='Enter Email Address'
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</div>
							</div>
							<p className='text-lg font-bold text-left mt-14'>
								Residential Information
							</p>{' '}
							<div className='mt-2'>
								<div className='sm:flex sm:gap-5'>
									<Select
										options={NaijaStates.states()}
										label='State'
										value={residentialState}
										onChange={(e) =>
											setResidentialState(e.target.value)
										}
									/>
									<Select
										options={
											NaijaStates.lgas(residentialState)
												.lgas
										}
										label='LGA'
										value={residentialLga}
										onChange={(e) =>
											setResidentialLga(e.target.value)
										}
									/>
								</div>
							</div>
							<p className='text-lg font-bold text-left mt-14'>
								Loan Information
							</p>
							<div className='mt-2'>
								<div className='sm:flex sm:gap-5'>
									<InputUI
										label='Loan Amount'
										type='number'
										placeholder='How much loan do you want?'
										value={loanAmount}
										onChange={(e) =>
											setLoanAmount(e.target.value)
										}
									/>
									<InputUI
										label='Tenure'
										type='number'
										placeholder='How many months do you want the loan for?'
										value={tenure}
										onChange={(e) =>
											setTenure(e.target.value)
										}
									/>
								</div>
								<p className='text-lg font-bold text-left mt-14'>
									Loan Purpose
								</p>
								<div className='sm:flex sm:gap-5'>
									<Select
										options={['Land', 'Building', 'Flat']}
										label='Property Type'
										value={loanPurpose}
										onChange={(e) =>
											setLoanPurpose(e.target.value)
										}
									/>
									<InputUI
										label='Property Value'
										type='number'
										placeholder='Enter Property Value'
										value={propertyValue}
										onChange={(e) =>
											setPropertyValue(e.target.value)
										}
									/>
								</div>
								<div className='sm:flex sm:gap-5'>
									<Select
										options={NaijaStates.states()}
										label='Property State'
										value={propertyState}
										onChange={(e) =>
											setPropertyState(e.target.value)
										}
									/>
									<Select
										options={
											NaijaStates.lgas(propertyState).lgas
										}
										label='Property LGA'
										value={propertyLga}
										onChange={(e) =>
											setPropertyLga(e.target.value)
										}
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
												employmentType ===
												'salary-earner'
											}
											onChange={(e) =>
												setEmploymentType(
													e.target.value
												)
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
											value={businessName}
											onChange={(e) =>
												setBusinessName(e.target.value)
											}
										/>
										<InputUI
											label='Monthly Turnover'
											type='text'
											placeholder='The amount you sell every month'
											value={turnover}
											onChange={(e) =>
												setTurnover(e.target.value)
											}
										/>
									</div>
								)}
								{employmentType === 'salary-earner' && (
									<div className='sm:flex sm:gap-5'>
										<InputUI
											label='Name of Employer'
											type='text'
											placeholder='The name of the company you work for'
											value={employer}
											onChange={(e) =>
												setEmployer(e.target.value)
											}
										/>
										<InputUI
											label='Monthly Net Salary'
											type='text'
											placeholder='The amount you get paid every month'
											value={salary}
											onChange={(e) =>
												setSalary(e.target.value)
											}
										/>
									</div>
								)}
							</div>
							<div className='sm:flex sm:gap-5'>
								<InputUI
									label='BVN'
									type='text'
									placeholder='Enter BVN'
									value={bvn}
									onChange={(e) => setBvn(e.target.value)}
								/>
								<InputUI
									label='When did you start working here?'
									type='month'
									placeholder='The amount you get paid every month'
									value={employmentMonth}
									onChange={(e) =>
										setEmploymentMonth(e.target.value)
									}
								/>
							</div>
							{/* <p className='text-lg font-bold text-left mt-14'>
								Documents
							</p>
							<div className='sm:flex sm:gap-5'>
								<FileInput label='Government Issued ID' />

								{employmentType === 'self-employed' ? (
									<FileInput
										label='CAC Certificate'
										placeholder='The amount you get paid every month'
									/>
								) : (
									<FileInput
										label='Employment or Confirmation Letter'
										placeholder='The amount you get paid every month'
									/>
								)}
							</div>
							<div className='sm:flex sm:gap-5'>
								<FileInput
									label='Latest 6 months bank statment'
									placeholder='The amount you get paid every month'
								/>
								<InputUI
									label='Password to bank statement (if any)'
									type='text'
									placeholder='Does your bank statement have a password?'
								/>
							</div>*/}
							<div className=' mt-5 mb-16 w-full flex flex-col sm:flex-row justify-around ga'>
								<div className='w-full'>
									<ButtonUI
										text='Submit'
										loading={isLoading}
										onClick={(e) => submit(e)}
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
			</AppContainer>
		</AuthContainer>
	);
}
