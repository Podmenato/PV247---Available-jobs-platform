import axios from 'axios';

import { IJobOffer } from 'interfaces/IJobOffer';
import { TApiJobOffer } from 'interfaces/TApiJobOffer';

const API_KEY = 'cpJjsgpbVA7RKtZ6m1kcw7YDcbx751AH6wtb9e3Y';

export const apiAllOffers = async (): Promise<TApiJobOffer> => {
	const headers = {
		'x-api-key': API_KEY
	};

	try {
		const response = await axios({
			url: 'https://api.apitalks.store/volna-pracovni-mista',
			method: 'GET',
			headers
		});
		return response.data;
	} catch (e: unknown) {
		if (axios.isAxiosError(e)) {
			throw new Error(`Request failed. The original error was: ${e.message}`);
		} else {
			throw new Error(`Request failed.`);
		}
	}
};

export const apiOfferById = async (id: string): Promise<IJobOffer> => {
	const headers = {
		'x-api-key': API_KEY
	};

	try {
		const response = await axios({
			url: `https://api.apitalks.store/volna-pracovni-mista/${id}`,
			method: 'GET',
			headers
		});
		return response.data;
	} catch (e: unknown) {
		if (axios.isAxiosError(e)) {
			throw new Error(`Request failed. The original error was: ${e.message}`);
		} else {
			throw new Error(`Request failed.`);
		}
	}
};
