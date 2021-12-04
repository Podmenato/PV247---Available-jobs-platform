import { createContext, FC, useContext, useEffect, useState } from 'react';

import { IJobOffer } from 'interfaces/IJobOffer';
import { apiAllOffers } from 'api/apiJobOffers';
import { TApiJobOffer } from 'interfaces/TApiJobOffer';

const OfferContext = createContext<IJobOffer[]>([]);

export const OfferProvider: FC = ({ children }) => {
	const [offers, setOffers] = useState<TApiJobOffer>();

	useEffect(() => {
		const getAllOffers = async () => {
			try {
				const response = await apiAllOffers();
				setOffers(response);
			} catch (err) {
				console.log(err);
			}
		};

		getAllOffers();
	}, []);

	return (
		<OfferContext.Provider value={offers?.data ?? []}>
			{children}
		</OfferContext.Provider>
	);
};

const useOffers = () => useContext(OfferContext);

export default useOffers;
