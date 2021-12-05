import React, { useState } from 'react';
import { Box, Button, Step, StepButton, Stepper } from '@mui/material';
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

	const handleStep = (step: number) => () => {
		setActiveStep(step);
	};

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleSave = () => {
		navigate(EPaths.LIST, { state: { params } });
	};

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
				<Button onClick={handleSave}>{t('save')}</Button>
			</Box>
		</Box>
	);
};

export default OfferSelectionStepper;
