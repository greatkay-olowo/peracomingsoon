import React, { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const StaffAuthContainer = ({ children }) => {
	const router = useRouter();
	useEffect(() => {
		const isLoggedIn = localStorage.getItem('isLoggedIn');
		const type = localStorage.getItem('type');
		if (!isLoggedIn && type !== 'staff') router.push('/auth/login');
		return;
	}, []);
	return children;
};

export default StaffAuthContainer;
