import React, { FC } from 'react';
import { Box } from '@mui/material';

import { EOfferSelectionSteps } from 'enums/EOfferSelectionSteps';
import EducationSelection from 'components/JobSelectionInputs/EducationSelection';
import { ISearchParams } from 'interfaces/ISearchParams';

type TProps = {
	step: EOfferSelectionSteps;
	params: ISearchParams;
	setParams: (params: ISearchParams) => void;
};

const StepSwitch: FC<TProps> = ({ step, params, setParams }) => (
	<Box sx={{ padding: 1 }}>
		{step === EOfferSelectionSteps.EDUCATION && (
			<EducationSelection params={params} setParams={setParams} />
		)}
		{step === EOfferSelectionSteps.FIELD && <div />}
		{step === EOfferSelectionSteps.LANGUAGE && <div />}
		{step === EOfferSelectionSteps.SALARY && <div>TEST</div>}
		{step === EOfferSelectionSteps.SHIFT && <div />}
		{step === EOfferSelectionSteps.WORK_RELATIONSHIP && <div />}
		{step === EOfferSelectionSteps.WORKER_TYPE && <div />}
	</Box>
);

export default StepSwitch;
