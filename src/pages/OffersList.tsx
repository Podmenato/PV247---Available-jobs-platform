import React, { useState } from 'react';
import { List } from '@mui/material';
import { useLocation } from 'react-router-dom';

import Filter from 'components/Filter';
import useOffers from 'hooks/useOffers';
import OfferPreview from 'components/OfferPreview';
import { useFilter } from 'hooks/useFilter';

const OffersList = () => {
	const location = useLocation();
	const [params] = useState(location.state.params);
	const offers = useOffers();
	const filtered = useFilter(offers, params);
	return (
		<>
			<Filter />
			<List>
				{filtered.map(offer => (
					<OfferPreview key={offer.uid} jobOffer={offer} />
				))}
			</List>
		</>
	);
};

export default OffersList;
