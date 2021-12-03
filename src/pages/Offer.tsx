import { Grid, Typography, Card } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { addDoc, deleteDoc, onSnapshot } from 'firebase/firestore';

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
	}, [id]);

	return (
		<>
			{id && jobParams ? (
				<Grid container spacing={2}>
					<OfferDetails jobParams={jobParams} offerId={id} />
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
