import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Nav from './Nav';
import { CgAdd } from 'react-icons/cg';
import Link from 'next/link';
import Footer from './Footer';

export default function AppContainer({ children, ...rest }) {
	const router = useRouter();
	const { id } = router.query;

	const auth = {
		isAuthenticated: true,
	};
	useEffect(() => {
		if (!auth.isAuthenticated) return router.push('/login');
	}, [auth.isAuthenticated]);

	return (
		<div className='bg-background '>
			<Nav />
			<main className='container py-2 px-2 sm:px-0 bottom-0 min-h-screen pb-7'>
				{children}
			</main>
			<Footer />
		</div>
	);
}
