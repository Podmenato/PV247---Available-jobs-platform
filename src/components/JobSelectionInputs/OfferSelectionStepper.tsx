import React, { useState } from 'react';
import {
	Box,
	Button,
	Step,
	StepLabel,
	Stepper,
	Typography
} from '@mui/material';

import { StepsNames } from 'enums/EOfferSelectionSteps';
import StepSwitch from 'components/JobSelectionInputs/StepSwitch';
import { emptyParams, ISearchParams } from 'interfaces/ISearchParams';

const steps = StepsNames;

const OfferSelectionStepper = () => {
	const [activeStep, setActiveStep] = React.useState(0);
	const [params, setParams] = useState<ISearchParams>(emptyParams);

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Stepper activeStep={activeStep}>
				{steps.map(label => {
					const stepProps: { completed?: boolean } = {};
					const labelProps: {
						optional?: React.ReactNode;
					} = {};
					return (
						<Step key={label} {...stepProps}>
							<StepLabel {...labelProps}>{label}</StepLabel>
						</Step>
					);
				})}
			</Stepper>
			{activeStep === steps.length ? (
				<>
					<Box sx={{ display: 'flex', justifyContent: 'center' }}>
						<Typography sx={{ mt: 2, mb: 1 }}>
							All steps completed - you&apos;re finished
						</Typography>
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Box sx={{ flex: '1 1 auto' }} />
						<Button onClick={handleReset}>Reset</Button>
					</Box>
				</>
			) : (
				<>
					<StepSwitch step={activeStep} params={params} setParams={setParams} />
					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Button
							color="inherit"
							disabled={activeStep === 0}
							onClick={handleBack}
							sx={{ mr: 1 }}
						>
							Back
						</Button>
						<Box sx={{ flex: '1 1 auto' }} />
						<Button onClick={handleNext}>
							{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
						</Button>
					</Box>
				</>
			)}
		</Box>
	);
};

export default OfferSelectionStepper;
