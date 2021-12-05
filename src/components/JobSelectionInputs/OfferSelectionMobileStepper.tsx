import React, { useEffect, useState } from 'react';
import { Alert, Box, Button, MobileStepper, useTheme } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { getDoc } from '@firebase/firestore';

import StepSwitch from 'components/JobSelectionInputs/StepSwitch';
import { emptyParams } from 'interfaces/ISearchParams';
import { StepsNames } from 'enums/EOfferSelectionSteps';
import { myFilterDocument, setFilter } from 'utils/firebase';
import useUser from 'hooks/useUser';
import { useTranslation } from 'hooks/useTranslation';

const steps = StepsNames;

const OfferSelectionMobileStepper = () => {
	const t = useTranslation();
	const user = useUser();
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const [params, setParams] = useState(emptyParams);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

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
		<Box sx={{ width: '100%' }}>
			<MobileStepper
				variant="progress"
				steps={steps.length}
				position="static"
				activeStep={activeStep}
				sx={{ maxWidth: 700, flexGrow: 1 }}
				nextButton={
					<Button
						size="small"
						onClick={handleNext}
						disabled={activeStep === steps.length - 1}
					>
						Next
						{theme.direction === 'rtl' ? (
							<KeyboardArrowLeft />
						) : (
							<KeyboardArrowRight />
						)}
					</Button>
				}
				backButton={
					<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
						{theme.direction === 'rtl' ? (
							<KeyboardArrowRight />
						) : (
							<KeyboardArrowLeft />
						)}
						Back
					</Button>
				}
			/>
			<StepSwitch step={activeStep} params={params} setParams={setParams} />
			{activeStep === steps.length - 1 && (
				<Button variant="outlined" onClick={handleSave}>
					{t('save')}
				</Button>
			)}
			{isSuccess && <Alert severity="success">{t('filter_success')}</Alert>}
			{isError && <Alert severity="error">{t('filter_error')}</Alert>}
		</Box>
	);
};

export default OfferSelectionMobileStepper;
