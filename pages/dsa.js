import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import ButtonUI from '../components/UI/Button';
import InputUI from '../components/UI/Input';
import Select from '../components/UI/Select';
import AppContainer from '../components/Container';
import NaijaStates from 'naija-state-local-government';

export default function Dsa() {
	const router = useRouter();

	const [stage, setStage] = useState(0);
	return (
		<AppContainer>
			<div className='rounded m-auto my-2 max-w-3xl	'>
				<div className='mt-4'>
					<h3 className='text-2xl font-bold text-center'>
						Register as a DSA
					</h3>
					<form action=''>
						<div className='mt-8'>
							<div className='sm:flex sm:gap-5'>
								<InputUI
									label='First Name'
									type='text'
									placeholder='Jane'
									error={''}
								/>
								<InputUI
									label='Surname'
									type='text'
									placeholder='Doe'
									error={''}
								/>
							</div>
							<div className='sm:flex sm:gap-5'>
								<InputUI
									label='Phone Number'
									type='tel'
									placeholder='070 123 4567'
									error={''}
								/>

								<InputUI
									label='Email'
									type='email'
									error={''}
								/>
							</div>

							<div className='sm:flex sm:gap-5'>
								<Select
									options={NaijaStates.states()}
									label='State'
									error={''}
								/>
								<Select
									options={NaijaStates.lgas('Oyo').lgas}
									label='LGA'
									error={''}
								/>
							</div>
							<div className='sm:flex sm:gap-5'>
								<InputUI
									label='Password'
									type='password'
									error={''}
								/>
								<InputUI
									label='Confirm Password'
									type='password'
									error={''}
								/>
							</div>
							<div className='sm:flex sm:gap-5'>
								<InputUI
									label='Referal Code'
									type='text'
									error={''}
								/>
								<Select
									options={[
										'Another DSA ',
										'Social Media',
										'Friend',
									]}
									label='How did you hear about us?'
									error={''}
								/>
							</div>
						</div>

						<div className=' mt-5 mb-16 w-full flex justify-around'>
							<ButtonUI
								text='Submit Application'
								onClick={() => router.push('/')}
							/>
						</div>
					</form>
				</div>
			</div>
		</AppContainer>
	);
}
