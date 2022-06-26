import React, { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const AuthContainer = ({ children }) => {
	const router = useRouter();
	useEffect(() => {
		const isLoggedIn = localStorage.getItem('isLoggedIn');
		const lastLogedIn = localStorage.getItem('lastLogedIn');
		if (!isLoggedIn || new Date().getMinutes() - lastLogedIn > 30)
			router.push('/auth/login');
		return;
	}, []);
	return children;
};

export default AuthContainer;
