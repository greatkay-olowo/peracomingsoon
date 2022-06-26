import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import InputUI from '../../components/UI/Input';
import AppContainer from '../../components/Container';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Signup() {
	useEffect(() => {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('firstName');
		localStorage.removeItem('lastName');
		localStorage.removeItem('isLoggedIn');
		localStorage.removeItem('lastLogedIn');
		localStorage.removeItem('type');
	}, []);
	const router = useRouter();

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();

	const signup = async (e) => {
		e.preventDefault();

		const payload = {
			email,
			password,
			firstName,
			lastName,
			type: 'user',
		};

		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`,
				payload
			);

			if (response.status === 201) {
				console.log(
					'🚀 ~ file: signup.js ~ line 41 ~ signup ~ response',
					response
				);
				localStorage.setItem(
					'accessToken',
					response.data.message.accessToken
				);
				localStorage.setItem(
					'firstName',
					response.data.message.firstName
				);
				localStorage.setItem(
					'lastName',
					response.data.message.lastName
				);
				localStorage.setItem('type', response.data.message.type);
				localStorage.setItem('isLoggedIn', true);
				localStorage.setItem('lastLogedIn', new Date().getMinutes());
				router.push('/');
			}
		} catch (error) {
			console.log(
				'🚀 ~ file: login.js ~ line 30 ~ login ~ error',
				error.response.data.message.error
			);
			alert(error.response.data.message.error);
		}
	};
	return (
		<AppContainer>
			<div className='max-w-md w-96 rounded mx-auto p-5 bg-white shadow'>
				<div className=''>
					<h3 className='text-2xl font-bold text-center'>
						Create an account
					</h3>
					<form action=''>
						<div className='mt-8'>
							<InputUI
								label='First name'
								type='text'
								placeholder='Enter First Name'
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>
							<InputUI
								label='Surname'
								type='text'
								placeholder='Enter Surname'
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
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
								onClick={(e) => signup(e)}
								className='px-6 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-white hover:text-primary'>
								Signup
							</button>
							<Link href='/auth/login'>
								<a className='text-sm text-primary hover:underline'>
									Login
								</a>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</AppContainer>
	);
}
