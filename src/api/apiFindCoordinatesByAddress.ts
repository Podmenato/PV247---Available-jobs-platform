import * as queryString from 'querystring';

import axios from 'axios';

const COUNTRY_CODE_CZECH = 'cz';
const FORMAT_JSON = 'json';
const NOMINATIM_SEARCH_URL = 'https://nominatim.openstreetmap.org/search';

export const apiFindCoordinatesByAddress = async (query: string) => {
	const headers = {
		'Accept':
			'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
		'Accept-Encoding': 'gzip, deflate, br',
		'Accept-Language': 'en-GB,en;q=0.5',
		'Connection': 'keep-alive',
		'Host': 'maps.grobeo.com',
		'Upgrade-Insecure-Requests': '1',
		'User-Agent':
			'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0'
	};

	const data = {
		'q': query,
		'countrycodes': COUNTRY_CODE_CZECH,
		'format': FORMAT_JSON,
		'accept-language': COUNTRY_CODE_CZECH,
		'addressdetails': 1
	};
	const params = queryString.stringify(data);

	try {
		const response = await axios({
			url: `${NOMINATIM_SEARCH_URL}?${params}`,
			method: 'GET',
			headers,
			responseType: 'json'
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
