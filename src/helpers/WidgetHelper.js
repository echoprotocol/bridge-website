export const validateWidgetCurrencyType = (value) => {

	if (value === 'asset' || value === 'token' || value === '-') {
		return false;
	}

	return true;
};
