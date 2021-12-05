import {
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Typography
} from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { IJobOffer } from 'interfaces/IJobOffer';
import FavoriteButton from 'components/FavoriteButton';
import { useTranslation } from 'hooks/useTranslation';
import { EPaths } from 'enums/EPaths';

type Props = {
	jobOffer: IJobOffer;
};

const OfferPreview: React.FC<Props> = ({ jobOffer }) => {
	const t = useTranslation();
	const { uid: offerId, PROFESE, FIRMA, PRACOVISTE, POZNAMKA } = jobOffer;

	return (
		<Card
			sx={{
				width: '100%',
				padding: '20px 50px',
				margin: '10px 0',
				borderTop: '3px solid #2E3F7F'
			}}
		>
			<CardHeader
				action={<FavoriteButton offerId={offerId} />}
				title={PROFESE?.nazev ?? t('no_title')}
				subheader={`${FIRMA?.nazev}, ${PRACOVISTE.obec}`}
			/>
			<CardContent>
				<Typography variant="body2">
					{POZNAMKA ? `${POZNAMKA.substr(0, 250)}...` : t('no_description')}
				</Typography>
			</CardContent>
			<CardActions sx={{ justifyContent: 'flex-end' }} disableSpacing>
				<Link
					to={EPaths.OFFER.replace(':id', offerId)}
					style={{ textDecoration: 'none', color: '#FC9A40' }}
				>
					{t('show_more')}
				</Link>
			</CardActions>
		</Card>
	);
};

export default OfferPreview;
