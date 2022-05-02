import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/UI/button';
import Input from '../../components/UI/input';

export default function ForgotPassword() {
	return (
		<div className='flex h-screen bg-accent'>
			<div className='max-w-md w-96 rounded m-auto p-5 bg-white shadow'>
				<div className='flex items-center h-16'>
					<div className='mx-auto'>
						<Image
							src='/Logo1.svg'
							alt='Pera Logo'
							width={100}
							height={100}
						/>
					</div>
				</div>
				<div className='mt-4'>
					<h3 className='text-2xl font-bold text-center'>
						Retrieve your password
					</h3>
					<div className='bg-accent rounded-sm my-4 p-2 shadow text-sm text-justify	'>
						We will send an email to the address you have in your
						profile containing an OTP to reset your password. The
						password expires in 5 minutes.
					</div>
					<Button primary text='Request OTP' />

					<form action=''>
						<div className='mt-4'>
							<Input
								label='OTP'
								type='text'
								placeholder='OTP'
								error={''}
							/>

							<Input
								label='New Password'
								type='password'
								placeholder='************'
								error={''}
							/>
							<Input
								label='Confirm Password'
								type='password'
								placeholder='************'
								error={''}
							/>
							<div className='flex items-baseline justify-between'>
								<button className='px-6 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-accent hover:text-primary'>
									Change Password
								</button>
								<Link href='/auth/login'>
									<a className='text-sm text-primary hover:underline'>
										Login
									</a>
								</Link>
							</div>
						</div>
						<div className='text-center border-t mt-5 border-primary'>
							<Link href='/auth/signup'>
								<a className='text-sm text-primary hover:underline'>
									Create an Account
								</a>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
