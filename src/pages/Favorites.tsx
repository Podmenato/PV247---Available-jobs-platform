import { useEffect, useState } from 'react';
import { onSnapshot } from '@firebase/firestore';

import useUser from 'hooks/useUser';
import { favoritesCollection } from 'utils/firebase';
import OfferPreview from 'components/OfferPreview';

const Favorites = () => {
	const [favorites, setFavorites] = useState<string[]>([]);
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
			{favorites.map((id, key) => (
				<OfferPreview key={key} jobId={id} />
			))}
		</>
	);
};

export default Favorites;
