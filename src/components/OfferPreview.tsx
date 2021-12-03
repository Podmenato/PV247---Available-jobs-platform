import {
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { apiOfferById } from 'api/apiJobOffers';
import { IJobOffer } from 'interfaces/IJobOffer';
import FavoriteButton from 'components/FavoriteButton';
import { useTranslation } from 'hooks/useTranslation';

type Props = {
	offerId: string;
};

const OfferPreview: React.FC<Props> = ({ offerId }) => {
	const [jobParams, setJobParams] = useState<IJobOffer>();
	const t = useTranslation();

	useEffect(() => {
		apiOfferById(offerId).then(data => {
			setJobParams(data);
		});
	}, [offerId]);

	return (
		<Card sx={{ width: '100%' }}>
			<CardHeader
				action={<FavoriteButton offerId={offerId} />}
				title={jobParams?.PROFESE?.nazev}
				subheader={`${jobParams?.FIRMA?.nazev}, ${jobParams?.PRACOVISTE.obec}`}
			/>
			<CardContent>
				<Typography variant="body2">
					{jobParams?.POZNAMKA.substr(0, 250)}...
				</Typography>
			</CardContent>
			<CardActions sx={{ justifyContent: 'flex-end' }} disableSpacing>
				<Link to={`/${offerId}`}>{t('show_more')}</Link>
			</CardActions>
		</Card>
	);
};

export default OfferPreview;
