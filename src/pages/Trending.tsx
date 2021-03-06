import { useEffect, useState } from 'react';
import { onSnapshot } from '@firebase/firestore';
import { Typography } from '@mui/material';

import { useTranslation } from 'hooks/useTranslation';
import LoadingBackdrop from 'components/LoadingBackdrop';
import { favoritesCollection } from 'utils/firebase';
import FavoriteOfferPreview from 'components/FavoriteOfferPreview';

const Trending = () => {
	const [trending, setTrending] = useState<string[]>();
	const [loading, setLoading] = useState(true);
	const t = useTranslation();

	useEffect(
		() =>
			onSnapshot(favoritesCollection, snapshot => {
				const favorites: Record<string, number> = {};
				snapshot.docs.map(
					d =>
						(favorites[d.data().offer] = (favorites[d.data().offer] || 0) + 1)
				);
				setTrending(
					Object.keys(favorites).sort((x, y) => favorites[y] - favorites[x])
				);
				setLoading(false);
			}),
		[]
	);

	return (
		<>
			<Typography variant="h2">{t('trending_offers')}</Typography>
			{trending?.map((offer, key) => (
				<FavoriteOfferPreview key={key} offerId={offer} />
			))}
			<LoadingBackdrop loading={loading} />
		</>
	);
};

export default Trending;
