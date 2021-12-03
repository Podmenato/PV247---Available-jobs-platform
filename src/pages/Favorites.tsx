import { useEffect, useState } from 'react';
import { onSnapshot } from '@firebase/firestore';
import { Typography } from '@mui/material';

import useUser from 'hooks/useUser';
import { favoritesCollection } from 'utils/firebase';
import OfferPreview from 'components/OfferPreview';
import { useTranslation } from 'hooks/useTranslation';

const Favorites = () => {
	const [favorites, setFavorites] = useState<string[]>([]);
	const t = useTranslation();
	const user = useUser();

	useEffect(
		() =>
			onSnapshot(favoritesCollection, snapshot =>
				setFavorites(
					snapshot.docs
						.filter(d => d.data().user === user?.email)
						.map(d => d.data().offer.toString())
				)
			),
		[user]
	);

	return (
		<>
			<Typography variant="h2">{t('favorite_offers')}</Typography>
			{favorites.map((id, key) => (
				<OfferPreview key={key} offerId={id} />
			))}
		</>
	);
};

export default Favorites;
