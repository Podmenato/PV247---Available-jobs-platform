import { useEffect, useState } from 'react';
import { onSnapshot } from '@firebase/firestore';

import useUser from 'hooks/useUser';
import { favoritesCollection } from 'utils/firebase';

type Props = {
	email?: string;
};

const Favorites = () => {
	const [favorites, setFavorites] = useState<number[]>([]);
	const user = useUser();

	useEffect(
		() =>
			onSnapshot(favoritesCollection, snapshot =>
				setFavorites(
					snapshot.docs
						.filter(d => d.data().user === user?.email)
						.map(d => d.data().offer)
				)
			),
		[user]
	);

	return <>{favorites.map(id => id)}</>;
};

export default Favorites;
