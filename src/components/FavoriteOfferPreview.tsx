import * as React from 'react';
import { useEffect, useState } from 'react';

import { apiOfferById } from 'api/apiJobOffers';
import { IJobOffer } from 'interfaces/IJobOffer';
import OfferPreview from 'components/OfferPreview';

type TProps = {
	offerId: string;
};

const FavoriteOfferPreview: React.FC<TProps> = ({ offerId }) => {
	const [jobOffer, setJobOffer] = useState<IJobOffer>();

	useEffect(() => {
		apiOfferById(offerId).then(data => {
			setJobOffer(data);
		});
	}, [offerId]);

	if (!jobOffer) {
		return null;
	}

	return <OfferPreview jobOffer={jobOffer} />;
};

export default FavoriteOfferPreview;
