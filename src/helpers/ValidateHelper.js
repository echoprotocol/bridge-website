export const isAccountNameError = (value) => {
	if (!value) {
		return "Account name shouldn't be empty";
	}

	if (value.length > 63) {
		return 'Account name too big';
	}

	const ref = value.split('.');

	for (let i = 0; i < ref.length; i += 1) {
		const label = ref[i];
		if (!/^[~a-z]/.test(label)) {
			return 'Invalid account name';
		}
		if (!/^[~a-z0-9-]*$/.test(label)) {
			return 'Invalid account name';
		}
		if (/--/.test(label)) {
			return 'Invalid account name';
		}
		if (!/[a-z0-9]$/.test(label)) {
			return 'Invalid account name';
		}
	}
	return false;
};

export const isAmountError = (value) => {
	const isNumber = (/^\d+$/.test(value) || /^\d+\.\d+$/.test(value));
	if (!isNumber && value !== '') {
		return 'Amount must contains only digits';
	}
	if (value === '') {
		return false;
	}
	return false;
};
