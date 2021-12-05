import React, { useEffect, useState } from 'react';
import { Box, Button, Step, StepButton, Stepper } from '@mui/material';
import { onSnapshot } from '@firebase/firestore';

import { StepsNames } from 'enums/EOfferSelectionSteps';
import StepSwitch from 'components/JobSelectionInputs/StepSwitch';
import { filledParams, ISearchParams } from 'interfaces/ISearchParams';
import { useTranslation } from 'hooks/useTranslation';
import { myFilterCollection, setFilter } from 'utils/firebase';
import useUser from 'hooks/useUser';

const steps = StepsNames;

const OfferSelectionStepper = () => {
	const [activeStep, setActiveStep] = React.useState(0);
	const [params, setParams] = useState<ISearchParams>(filledParams);
	const user = useUser();
	const t = useTranslation();

	const handleStep = (step: number) => () => {
		setActiveStep(step);
	};

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleSave = async () => {
		if (!user?.email) {
			return;
		}

		try {
			await setFilter(params);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(
		() =>
			onSnapshot(myFilterCollection, snapshot => {
				const fetched: ISearchParams | undefined = snapshot.docs[0].data();
				if (fetched) {
					setParams(fetched);
				}
			}),
		[user]
	);

	return (
		<Box sx={{ width: '100%', height: '600px', padding: 1 }}>
			<Stepper nonLinear activeStep={activeStep}>
				{steps.map((label, index) => {
					const stepProps: { completed?: boolean } = {};
					return (
						<Step key={label} {...stepProps}>
							<StepButton color="inherit" onClick={handleStep(index)}>
								{label}
							</StepButton>
						</Step>
					);
				})}
			</Stepper>
			<Box sx={{ width: '100%', height: '200px' }}>
				<StepSwitch step={activeStep} params={params} setParams={setParams} />
				<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
					<Button
						color="inherit"
						disabled={activeStep === 0}
						onClick={handleBack}
						sx={{ mr: 1 }}
					>
						{t('back')}
					</Button>
					<Box sx={{ flex: '1 1 auto' }} />
					<Button
						disabled={activeStep === steps.length - 1}
						onClick={handleNext}
					>
						{t('next')}
					</Button>
				</Box>
				<Button variant="contained" onClick={handleSave}>
					{t('save')}
				</Button>
			</Box>
		</Box>
	);
};

export default OfferSelectionStepper;
