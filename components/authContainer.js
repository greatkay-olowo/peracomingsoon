import React, { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const AuthContainer = ({ children }) => {
	const router = useRouter();
	useEffect(() => {
		const isLoggedIn = Cookies.get('isLoggedIn');
		if (isLoggedIn !== 'True') router.push('/auth/login');
		return;
	}, []);
	return children;
};

export default AuthContainer;
