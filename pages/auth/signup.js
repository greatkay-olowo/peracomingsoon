import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import InputUI from '../../components/UI/Input';
import AppContainer from '../../components/Container';
import axios from 'axios';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export default function Signup() {
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
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [isLoading, setIsLoading] = useState(false);

	const signup = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		const payload = {
			email,
			password,
			firstName,
			lastName,
			type: 'user',
		};

		try {
			const response = await axios.post(
				`https://develop-backend-pera.onrender.com/api/v1/auth/signup`,
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
				setIsLoading(false);
			}
		} catch (error) {
			alert(error.response.data.message.error);
			setIsLoading(false);
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
								{!isLoading ? (
									'Signup'
								) : (
									<svg
										role='status'
										className='w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
										viewBox='0 0 100 101'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
											fill='currentColor'
										/>
										<path
											d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
											fill='currentFill'
										/>
									</svg>
								)}
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
