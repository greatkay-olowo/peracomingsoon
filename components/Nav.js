import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CgProfile } from 'react-icons/cg';
import ButtonUI from './UI/Button';
import Cookies from 'js-cookie';

const activeLink = `px-3 py-2 font-bold font-bold text-primary`;
const nonActiveLink = `px-3 py-2 font-bold hover:text-primary`;
function Nav() {
	const router = useRouter();
	const [clientIsLoggedIn, setClientIsLoggedIn] = useState(false);
	useEffect(() => {
		const isLoggedIn = Cookies.get('isLoggedIn');

		if (isLoggedIn) {
			setClientIsLoggedIn(isLoggedIn);
		}
	}, []);

	const [isOpen, setIsOpen] = useState(false);
	const [showIcon, setShowIcon] = useState(false);

	const logout = () => {
		Cookies.remove('isLoggedIn');
		router.reload();
	};
	return (
		<>
			<nav className='shadow-md sticky top-0 bg-white z-50'>
				<div className='mx-auto px-10 sm:px-20 sm:py-5'>
					<div className='flex items-center justify-between h-16'>
						<div className='flex items-center'>
							<Link
								href='/'
								className='flex-shrink-0 cursor-pointer'>
								<img
									className='w-20  cursor-pointer'
									src='/Logo1.svg'
									alt='Pera Logo'
								/>
							</Link>
							<div className='hidden md:block '>
								<div className='ml-10 flex items-baseline space-x-4'>
									<Link href='/'>
										<a
											className={
												router.pathname == '/'
													? activeLink
													: nonActiveLink
											}>
											Home
										</a>
									</Link>
									<Link href='/new-application'>
										<a
											className={
												router.pathname ==
												'/new-application'
													? activeLink
													: nonActiveLink
											}>
											New Application
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className='flex items-center justify-between'>
							{!clientIsLoggedIn && (
								<>
									{' '}
									<Link href='/auth/login'>
										<a
											className={`${
												router.pathname == '/login'
													? activeLink
													: nonActiveLink
											} hidden sm:inline-block`}>
											Login
										</a>
									</Link>
									<Link href='/auth/signup'>
										<a
											className={`${
												router.pathname == '/signup'
													? activeLink
													: nonActiveLink
											} hidden sm:inline-block`}>
											Sign Up
										</a>
									</Link>
								</>
							)}
							{clientIsLoggedIn && (
								<>
									<button
										className={`${
											router.pathname == '/signup'
												? activeLink
												: nonActiveLink
										} hidden sm:inline-block`}
										onClick={() => {
											logout();
										}}>
										Logout
									</button>
								</>
							)}
							<div className='-mr-2 flex md:hidden'>
								<button
									onClick={() =>
										setIsOpen((isOpen) => !isOpen)
									}
									type='button'
									className='bg-white inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-none'
									aria-controls='mobile-menu'
									aria-expanded='false'>
									<span className='sr-only'>
										Open main menu
									</span>
									{!isOpen ? (
										<svg
											className='block h-6 w-6'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											aria-hidden='true'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M4 6h16M4 12h16M4 18h16'
											/>
										</svg>
									) : (
										<svg
											className='block h-6 w-6'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											aria-hidden='true'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									)}
								</button>
							</div>
						</div>
					</div>
				</div>

				{isOpen && (
					<div
						className='md:hidden transition ease-in-out delay-150'
						id='mobile-menu'>
						<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
							<Link href='/'>
								<a
									className={
										router.pathname == '/'
											? activeLink
											: nonActiveLink
									}>
									Home
								</a>
							</Link>
						</div>
						<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
							<Link href='/new-application'>
								<a
									className={
										router.pathname == '/new-application'
											? activeLink
											: nonActiveLink
									}>
									New Application
								</a>
							</Link>
						</div>

						{!clientIsLoggedIn && (
							<>
								<div className='mx-2'>
									<button
										className='hover:bg-primary hover:text-white bg-white px-4 py-2 my-1 hover:shadow-lg w-full'
										onClick={() => {
											router.push('/auth/signup');
										}}>
										Sign Up
									</button>
								</div>
								<div className=' mx-2'>
									<button
										className='hover:bg-primary hover:text-white bg-white px-4 py-2 my-1 hover:shadow-lg w-full'
										onClick={() => {
											router.push('/auth/login');
										}}>
										Login
									</button>
								</div>
							</>
						)}
						{clientIsLoggedIn && (
							<div className=' mx-2'>
								<button
									className='hover:bg-primary hover:text-white bg-white px-4 py-2 my-1 hover:shadow-lg w-full'
									onClick={() => {
										logout();
									}}>
									Logout
								</button>
							</div>
						)}
					</div>
				)}
			</nav>
		</>
	);
}

export default Nav;
