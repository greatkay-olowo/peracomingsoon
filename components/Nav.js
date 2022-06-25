import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CgProfile } from 'react-icons/cg';
import ButtonUI from './UI/Button';

const activeLink = `px-3 py-2 font-bold font-bold text-primary`;
const nonActiveLink = `px-3 py-2 font-bold hover:text-primary`;
function Nav() {
	const router = useRouter();

	const [isOpen, setIsOpen] = useState(false);
	const [showIcon, setShowIcon] = useState(false);
	return (
		<>
			<nav className='shadow-md sticky top-0 bg-white z-50'>
				<div className='mx-auto px-10 sm:px-20 py-5'>
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
									<Link href='/loan'>
										<a
											className={
												router.pathname == '/loan'
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
									{/* <Link href='/proforma-invoice'>
										<a
											className={
												router.pathname ==
												'/proforma-invoice'
													? activeLink
													: nonActiveLink
											}>
											Generate Invoice
										</a>
									</Link> 
									<Link href='/dsa'>
										<a
											className={
												router.pathname == '/dsa'
													? activeLink
													: nonActiveLink
											}>
											DSA
										</a>
									</Link>*/}
								</div>
							</div>
						</div>
						<div className='flex items-center justify-between'>
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
							<div className=' hidden sm:inline-block'>
								<div
									className='flex text-primary cursor-pointer hover:text-secondary '
									onClick={() => setShowIcon(!showIcon)}>
									<CgProfile className='text-2xl mx-2 text-primary cursor-pointer ' />{' '}
									<span className='mr-5'>Settings</span>
									{showIcon && (
										<div className='shadow-lg absolute mt-10 border border-primary text-primary bg-white'>
											<button
												className='hover:bg-primary hover:text-white w-full  p-1 border-b border-primary '
												onClick={() => {
													router.push('/profile');
												}}>
												Profile
											</button>
											<button className='hover:bg-primary hover:text-white w-full  p-1'>
												Logout
											</button>
										</div>
									)}
								</div>
							</div>
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
							<a
								href='#'
								className={
									router.pathname == '/loan'
										? activeLink
										: nonActiveLink
								}>
								Loan
							</a>
						</div>
						<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
							<a
								href='#'
								className={
									router.pathname == '/new-application'
										? activeLink
										: nonActiveLink
								}>
								New Application
							</a>
						</div>
						<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
							<a
								href='#'
								className={
									router.pathname == '/dsa'
										? activeLink
										: nonActiveLink
								}>
								DSA
							</a>
						</div>
						<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
							<a
								href='#'
								className={
									router.pathname == '/profile'
										? activeLink
										: nonActiveLink
								}>
								Profile
							</a>
						</div>
						<div className='mx-2'>
							<button
								className='hover:bg-primary hover:text-white bg-white px-4 py-2 my-1 hover:shadow-lg w-full'
								onClick={() => {
									router.push('/signup');
								}}>
								Sign Up
							</button>
						</div>
						<div className=' mx-2'>
							<button
								className='hover:bg-primary hover:text-white bg-white px-4 py-2 my-1 hover:shadow-lg w-full'
								onClick={() => {
									router.push('/login');
								}}>
								Login
							</button>
						</div>
						<div className=' mx-2'>
							<button
								className='hover:bg-primary hover:text-white bg-white px-4 py-2 my-1 hover:shadow-lg w-full'
								onClick={() => {}}>
								Logout
							</button>
						</div>
					</div>
				)}
			</nav>
		</>
	);
}

export default Nav;
