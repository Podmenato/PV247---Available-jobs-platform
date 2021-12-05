import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useEffect } from 'react';
import { getDoc } from '@firebase/firestore';

import OfferPreview from 'components/OfferPreview';
import Filter from 'components/filter/Filter';
import { useTranslation } from 'hooks/useTranslation';
import { filledParams, ISearchParams } from 'interfaces/ISearchParams';
import { useFilter } from 'hooks/useFilter';
import useOffers from 'hooks/useOffers';
import useUser from 'hooks/useUser';
import { myFilterDocument } from 'utils/firebase';

const Home: React.FC = () => {
	const t = useTranslation();
	const user = useUser();
	const allOffers = useOffers();

	const [isFilterVisible, setIsFilterVisible] = React.useState(false);
	const [params, setParams] = React.useState<ISearchParams>(filledParams);

	useEffect(() => {
		const fetchFilter = async () => {
			if (user) {
				const fetched = await getDoc(myFilterDocument(user.uid));
				if (fetched.exists()) {
					setParams(fetched.data());
				}
			}
		};

		fetchFilter();
		if (!user) {
			setParams(filledParams);
		}
	}, [user]);

	const onToggleFilter = () => {
		setIsFilterVisible(!isFilterVisible);
	};

	const offers = useFilter(allOffers, params);

	return (
		<>
			{user && (
				<Typography variant="h4">{`${t('hello')}, ${user?.email}!`}</Typography>
			)}
			<Paper sx={{ width: '100%', padding: 2 }}>
				<Box
					onClick={onToggleFilter}
					sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
				>
					<Typography variant="h6">Filter</Typography>
					{isFilterVisible ? <ExpandLess /> : <ExpandMore />}
				</Box>
				{isFilterVisible && (
					<Box sx={{ marginTop: '20px' }}>
						<Filter params={params} setParams={setParams} />
					</Box>
				)}
			</Paper>
			{offers.map(offer => (
				<OfferPreview key={offer.uid} jobOffer={offer} />
			))}
		</>
	);
};

export default Home;
