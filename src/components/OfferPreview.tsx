import { Paper } from '@mui/material';
import { useState } from 'react';

import { apiOfferById } from 'api/apiJobOffers';
import { IJobOffer } from 'interfaces/IJobOffer';

type Props = {
	jobId: string;
};

const OfferPreview: React.FC<Props> = ({ jobId }) => {
	const [jobParams, setJobParams] = useState<IJobOffer>();

	apiOfferById(jobId).then(data => {
		setJobParams(data);
	});

	return <Paper>{jobParams?.PROFESE?.nazev}</Paper>;
};

export default OfferPreview;
