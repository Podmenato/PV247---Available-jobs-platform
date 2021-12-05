import React, { useState } from 'react';
import {
	Box,
	Button,
	Step,
	StepLabel,
	Stepper,
	Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { StepsNames } from 'enums/EOfferSelectionSteps';
import StepSwitch from 'components/JobSelectionInputs/StepSwitch';
import { emptyParams, ISearchParams } from 'interfaces/ISearchParams';
import { EPaths } from 'enums/EPaths';
import { useTranslation } from 'hooks/useTranslation';

const steps = StepsNames;

const OfferSelectionStepper = () => {
	const [activeStep, setActiveStep] = React.useState(0);
	const [params, setParams] = useState<ISearchParams>(emptyParams);
	const navigate = useNavigate();
	const t = useTranslation();

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleSearch = () => {
		navigate(EPaths.LIST, { state: { params } });
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
						<Button onClick={handleSearch}>Search</Button>
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
							{t('back')}
						</Button>
						<Box sx={{ flex: '1 1 auto' }} />
						<Button onClick={handleNext}>
							{activeStep === steps.length - 1 ? t('finish') : t('next')}
						</Button>
					</Box>
				</>
			)}
		</Box>
	);
};

export default OfferSelectionStepper;
