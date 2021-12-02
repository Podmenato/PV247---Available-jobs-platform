import {
	Grid,
	Typography,
	Card,
	Backdrop,
	CircularProgress
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios, { AxiosResponse } from 'axios';
import { addDoc, deleteDoc, onSnapshot } from 'firebase/firestore';

import { favoritesCollection, favoritesDocument } from 'utils/firebase';
import useUser from 'hooks/useUser';
import OfferDetails from 'components/OfferDetails';
import OfferContact from 'components/OfferContact';
import { apiOfferById } from 'api/apiJobOffers';
import { IJobOffer } from 'interfaces/IJobOffer';
import LoadingBackdrop from 'components/LoadingBackdrop';

const Offer = () => {
	const { id } = useParams();
	const user = useUser();
	const [jobParams, setJobParams] = useState<IJobOffer>();
	const [loaded, setLoaded] = useState<boolean>(false);
	const [favoriteId, setFavoriteId] = useState<string | undefined>(undefined);

	useEffect(() => {
		const unsubscribe = onSnapshot(favoritesCollection, snapshot => {
			setFavoriteId(
				snapshot.docs
					.filter(
						doc =>
							doc.data().user === user?.email &&
							id &&
							doc.data().offer === parseInt(id)
					)
					.map(doc => doc.id)
					.pop()
			);
		});
		return () => {
			unsubscribe();
		};
	}, [user]);

	useEffect(() => {
		if (id === undefined) return;
		apiOfferById(id).then(
			(response: IJobOffer) => {
				setJobParams(response);
				setLoaded(true);
			},
			() => {
				setJobParams(undefined);
				setLoaded(true);
			}
		);
	}, [id]);

	const handleFavorite = async () => {
		if (!user?.email || !id) {
			return;
		}

		try {
			if (favoriteId) {
				const document = favoritesDocument(favoriteId);
				await deleteDoc(document);
			} else {
				await addDoc(favoritesCollection, {
					user: user.email,
					offer: parseInt(id)
				});
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			{jobParams ? (
				<Grid container spacing={2}>
					<OfferDetails
						handleFavorite={handleFavorite}
						favoriteId={favoriteId}
						jobParams={jobParams}
					/>
					<OfferContact jobParams={jobParams} />
				</Grid>
			) : (
				loaded && (
					<Grid container spacing={2}>
						<Grid item xs={12} md={12}>
							<Card sx={{ padding: '1em' }}>
								<Typography variant="h4">
									Not found. Offer does not exist or the server is not
									responding, please try again later.
								</Typography>
							</Card>
						</Grid>
					</Grid>
				)
			)}
			<LoadingBackdrop loading={!loaded} />
		</>
	);
};

export default Offer;
