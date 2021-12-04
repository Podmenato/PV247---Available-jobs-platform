import React, { useState } from 'react';
import { Box, Button, MobileStepper, useTheme } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

import StepSwitch from 'components/JobSelectionInputs/StepSwitch';
import { emptyParams } from 'interfaces/ISearchParams';
import { StepsNames } from 'enums/EOfferSelectionSteps';

const steps = StepsNames;

const OfferSelectionMobileStepper = () => {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const [params, setParams] = useState(emptyParams);

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};
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
				<Button variant="outlined">FINISH</Button>
			)}
		</Box>
	);
};

export default OfferSelectionMobileStepper;
