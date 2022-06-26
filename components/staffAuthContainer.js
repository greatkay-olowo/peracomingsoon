import React, { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const StaffAuthContainer = ({ children }) => {
	const router = useRouter();
	useEffect(() => {
		const isLoggedIn = Cookies.get('isLoggedIn');
		const type = Cookies.get('type');
		if (!isLoggedIn && type !== 'staff') router.push('/auth/login');
		return;
	}, []);
	return children;
};

export default StaffAuthContainer;
