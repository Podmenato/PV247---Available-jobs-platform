import { deleteDoc } from '@firebase/firestore';
import { Star, StarOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { addDoc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

import useUser from '../hooks/useUser';
import { favoritesCollection, favoritesDocument } from '../utils/firebase';

type Props = {
	offerId: string;
};

const FavoriteButton: React.FC<Props> = ({ offerId }) => {
	const [favoriteId, setFavoriteId] = useState<string | undefined>(undefined);
	const user = useUser();

	useEffect(() => {
		const unsubscribe = onSnapshot(favoritesCollection, snapshot => {
			setFavoriteId(
				snapshot.docs
					.filter(
						doc =>
							doc.data().user === user?.email &&
							offerId &&
							doc.data().offer === parseInt(offerId)
					)
					.map(doc => doc.id)
					.pop()
			);
		});
		return () => {
			unsubscribe();
		};
	}, [offerId, user]);

	const handleFavorite = async () => {
		if (!user?.email || !offerId) {
			return;
		}

		try {
			if (favoriteId) {
				const document = favoritesDocument(favoriteId);
				await deleteDoc(document);
			} else {
				await addDoc(favoritesCollection, {
					user: user.email,
					offer: parseInt(offerId)
				});
			}
		} catch (err) {
			console.log(err);
		}
	};

	return user ? (
		<IconButton onClick={handleFavorite}>
			{favoriteId ? (
				<Star sx={{ color: 'star' }} />
			) : (
				<StarOutline sx={{ color: 'star' }} />
			)}
		</IconButton>
	) : (
		<div />
	);
};

export default FavoriteButton;
