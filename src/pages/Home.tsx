import * as React from 'react';
import { Paper } from '@mui/material';

import OfferSelectionMobileStepper from 'components/JobSelectionInputs/OfferSelectionMobileStepper';
import { usePlatform } from 'hooks/usePlatform';
import { EPlatform } from 'enums/EPlatform';
import OfferSelectionStepper from 'components/JobSelectionInputs/OfferSelectionStepper';

const Home: React.FC = () => {
	const platform = usePlatform();

	return (
		<Paper>
			{platform === EPlatform.DESKTOP && <OfferSelectionStepper />}
			{platform !== EPlatform.DESKTOP && <OfferSelectionMobileStepper />}
		</Paper>
	);
};

export default Home;
