import React, { useEffect, useState } from 'react';
import { Alert, Box, Button, Step, StepButton, Stepper } from '@mui/material';
import { getDoc } from '@firebase/firestore';

import { StepsNames } from 'enums/EOfferSelectionSteps';
import StepSwitch from 'components/JobSelectionInputs/StepSwitch';
import { filledParams, ISearchParams } from 'interfaces/ISearchParams';
import { useTranslation } from 'hooks/useTranslation';
import { myFilterDocument, setFilter } from 'utils/firebase';
import useUser from 'hooks/useUser';

const steps = StepsNames;

const OfferSelectionStepper = () => {
	const [activeStep, setActiveStep] = React.useState(0);
	const [params, setParams] = useState<ISearchParams>(filledParams);
	const user = useUser();
	const t = useTranslation();
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

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
			await setFilter(user.uid, params);
			setIsSuccess(true);
		} catch (err) {
			setIsError(true);
		}
	};

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
	}, [user]);

	return (
		<Box>
			<Box sx={{ width: '100%', height: '600px', padding: 3 }}>
				<Stepper
					nonLinear
					activeStep={activeStep}
					sx={{ marginBottom: '20px' }}
				>
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
			{isSuccess && <Alert severity="success">{t('filter_success')}</Alert>}
			{isError && <Alert severity="error">{t('filter_error')}</Alert>}
		</Box>
	);
};

export default OfferSelectionStepper;
