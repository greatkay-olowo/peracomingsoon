import React, { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const AuthContainer = ({ children }) => {
	const router = useRouter();
	useEffect(() => {
		const isLoggedIn = Cookies.get('isLoggedIn');
		const lastLogedIn = Cookies.get('lastLogedIn');
		if (!isLoggedIn || new Date().getMinutes() - lastLogedIn > 30)
			router.push('/auth/login');
		return;
	}, []);
	return children;
};

export default AuthContainer;
