import * as React from 'react';
import { Paper } from '@mui/material';

import useOffers from 'hooks/useOffers';
import OfferPreview from 'components/OfferPreview';
import Filter from 'components/Filter';
import { ALL_WORKER_TYPES, EWorkerType } from 'enums/EWorkerType';
import OfferSelectionStepper from 'components/JobSelectionInputs/OfferSelectionStepper';

const Home: React.FC = () => {
	const offers = useOffers();
	// console.log(allOffers, 'offers');
	//
	// const [salaryValue, setSalaryValue] = React.useState('');
	// const [workerTypeValues, setWorkerTypeValues] = React.useState<{
	// 	[key in EWorkerType]: boolean;
	// }>(
	// 	ALL_WORKER_TYPES.reduce(
	// 		(acc, workerType) => ({ ...acc, [workerType]: false }),
	// 		{} as {
	// 			[key in EWorkerType]: boolean;
	// 		}
	// 	)
	// );
	//
	// const onSalaryValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setSalaryValue(event.target.value);
	// };
	//
	// const onWorkerTypeValuesChange = (
	// 	event: React.ChangeEvent<HTMLInputElement>
	// ) => {
	// 	setWorkerTypeValues({
	// 		...workerTypeValues,
	// 		[event.target.name]: event.target.checked
	// 	});
	// };
	//
	// const offers = allOffers.filter(offer => {
	// 	if (salaryValue.length && !isNaN(Number(salaryValue))) {
	// 		return offer.MZDA.min >= salaryValue;
	// 	} else {
	// 		return true;
	// 	}
	// });
	//
	// console.log(salaryValue, 'salary');
	// console.log(offers, 'filtered offers');

	return (
		<Paper>
			<OfferSelectionStepper />
			{/*{offers.map(offer => (*/}
			{/*	<OfferPreview key={offer.uid} jobOffer={offer} />*/}
			{/*))}*/}
		</Paper>
	);
};

export default Home;
