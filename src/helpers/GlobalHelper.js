import randomstring from 'randomstring';
import { keccak256 } from 'js-sha3';
import { utf8 } from 'utf8';

export const generateUniqueKey = (key) => `${Date.now()}_${randomstring.generate(10)}${key || ''}`;


export const getTransferCode = (id, amount) => {

	const method = keccak256('transfer(address,uint256)').substr(0, 8);

	const idArg = Number(id.split('.')[2]).toString(16).padStart(64, '0');

	const amountArg = amount.toString(16).padStart(64, '0');

	return method + idArg + amountArg;
};

export const toUtf8 = (hex) => {
	let str = '';

	for (let i = 0; i < hex.length; i += 2) {
		const code = parseInt(hex.substr(i, 2), 16);
		if (code !== 0) {
			str += String.fromCharCode(code);
		}
	}
	let result = str;
	try {
		result = utf8.decode(str);
	} catch (error) {
		result = str;
	}
	return result;
};
