import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/UI/button';
import Input from '../../components/UI/input';
import AppContainer from '../../components/Container';

export default function Login() {
	return (
		<AppContainer>
			<div className='max-w-md w-96 rounded m-auto p-5 bg-white shadow'>
				<div className='mt-4'>
					<h3 className='text-2xl font-bold text-center'>
						Login to your account
					</h3>
					<form action=''>
						<div className='mt-8'>
							<Input
								label='Email'
								type='email'
								placeholder='Email'
								error={''}
							/>
							<Input
								label='Password'
								type='password'
								placeholder='************'
								error={''}
							/>
						</div>
						<div className='flex items-baseline justify-between'>
							<Link href='/'>
								<a className='px-6 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-accent hover:text-primary'>
									Login
								</a>
							</Link>
							<Link href='/auth/forgot-password'>
								<a className='text-sm text-primary hover:underline'>
									Forgot Password
								</a>
							</Link>
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
		</AppContainer>
	);
}
