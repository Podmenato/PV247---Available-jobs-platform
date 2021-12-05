import React from 'react';
import { Paper } from '@mui/material';

import { EPlatform } from 'enums/EPlatform';
import OfferSelectionStepper from 'components/JobSelectionInputs/OfferSelectionStepper';
import OfferSelectionMobileStepper from 'components/JobSelectionInputs/OfferSelectionMobileStepper';
import { usePlatform } from 'hooks/usePlatform';

const MyFilter = () => {
	const platform = usePlatform();

	return (
		<Paper>
			{platform === EPlatform.DESKTOP && <OfferSelectionStepper />}
			{platform !== EPlatform.DESKTOP && <OfferSelectionMobileStepper />}
		</Paper>
	);
};

export default MyFilter;
