import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import InputUI from '../../components/UI/Input';
import AppContainer from '../../components/Container';
import axios from 'axios';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export default function Login() {
	useEffect(() => {
		Cookies.remove('accessToken');
		Cookies.remove('firstName');
		Cookies.remove('lastName');
		Cookies.remove('isLoggedIn');
		Cookies.remove('lastLogedIn');
		Cookies.remove('type');
	}, []);
	const router = useRouter();

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const login = async (e) => {
		e.preventDefault();

		const payload = {
			email,
			password,
		};

		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
				payload
			);

			if (response.status === 201) {
				Cookies.set('accessToken', response.data.message.accessToken, {
					expires: 1,
				});
				Cookies.set('firstName', response.data.message.firstName, {
					expires: 1,
				});
				Cookies.set('lastName', response.data.message.lastName, {
					expires: 1,
				});
				Cookies.set('isLoggedIn', true, { expires: 1 });
				Cookies.set('type', response.data.message.type, { expires: 1 });
				router.push('/');
			}
		} catch (error) {
			alert(error.response.data.message.error);
		}
	};
	return (
		<AppContainer>
			<div className='max-w-md w-96 rounded mx-auto p-5 bg-white shadow'>
				<div className='mt-4'>
					<h3 className='text-2xl font-bold text-center'>
						Login to your account
					</h3>
					<form action=''>
						<div className='mt-8'>
							<InputUI
								label='Email'
								type='email'
								placeholder='Email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<InputUI
								label='Password'
								type='password'
								placeholder='************'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className='flex items-baseline justify-between'>
							<button
								className='px-6 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-accent hover:text-primary'
								onClick={(e) => login(e)}>
								Login
							</button>
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
