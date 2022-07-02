import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import InputUI from '../../components/UI/Input';
import AppContainer from '../../components/Container';
import axios from 'axios';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
	/**
	 *
	 * @param {String} text
	 * @returns
	 */
	const notifySuccess = (text) => toast.success(text);
	/**
	 *
	 * @param {String} text
	 * @returns
	 */
	const notifyError = (text) => toast.error(text);
	const notifyLoading = () => toast.loading('Loading');

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
		toast.dismiss();
		notifyLoading();
		const payload = {
			email,
			password,
		};

		try {
			const response = await axios.post(
				`https://develop-backend-pera.onrender.com/api/v1/auth/login`,
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
				Cookies.set('isLoggedIn', 'True', { expires: 1 });
				Cookies.set('type', response.data.message.type, { expires: 1 });
				toast.dismiss();
				notifySuccess('Success');
				router.push('/');
			}
		} catch (error) {
			// alert(error.response.data.message.error);
			toast.dismiss();
			notifyError(error.response.data.message.error);
		}
	};
	return (
		<AppContainer>
			<Toaster />

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
								className='px-6 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-white hover:text-primary'
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
