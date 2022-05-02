import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/UI/button';
import Input from '../../components/UI/input';

export default function Signup() {
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
						Create an account
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
							<Link href='/profile'>
								<a className='px-6 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-accent hover:text-primary'>
									Signup
								</a>
							</Link>
							<Link href='/auth/login'>
								<a className='text-sm text-primary hover:underline'>
									Login
								</a>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
