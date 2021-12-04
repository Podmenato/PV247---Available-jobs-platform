import { useEffect, useState } from 'react';
import { onSnapshot } from '@firebase/firestore';
import { Typography } from '@mui/material';

import { useTranslation } from 'hooks/useTranslation';

import { favoritesCollection } from '../utils/firebase';
import OfferPreview from '../components/OfferPreview';

const Trending = () => {
	const [trending, setTrending] = useState<string[]>();
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
			}),
		[]
	);

	return (
		<>
			<Typography variant="h2">{t('trending_offers')}</Typography>
			{trending?.map((offer, key) => (
				<OfferPreview key={key} offerId={offer} />
			))}
		</>
	);
};

export default Trending;
