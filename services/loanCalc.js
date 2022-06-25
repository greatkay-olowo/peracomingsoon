export const loanAmount = (amount, equity) => {
	if (amount < 0 || amount == NaN) return 'NGN 0';
	return (amount - (amount * equity) / 100).toLocaleString('en-US', {
		style: 'currency',
		currency: 'NGN',
	});
};
export const equity = (amount, equity) => {
	if (amount < 0 || amount == NaN) return 'NGN 0';
	return ((amount * equity) / 100).toLocaleString('en-US', {
		style: 'currency',
		currency: 'NGN',
	});
};
export const emi = (amount, years, interest) => {
	if (years > 1 || years == NaN) years = 1;
	return (
		(amount * interest * Math.pow(1 + interest, years)) /
		(Math.pow(1 + interest, years) - 1)
	).toLocaleString('en-US', {
		style: 'currency',
		currency: 'NGN',
	});
};

export const propertyAmount = (amount) => {
	if (amount < 0 || amount == NaN) return 'NGN 0';
	return amount.toLocaleString('en-US', {
		style: 'currency',
		currency: 'NGN',
	});
};
