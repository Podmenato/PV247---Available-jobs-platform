import React, { FC } from 'react';
import { Box } from '@mui/material';

import { EOfferSelectionSteps } from 'enums/EOfferSelectionSteps';
import EducationSelection from 'components/JobSelectionInputs/EducationSelection';
import { ISearchParams } from 'interfaces/ISearchParams';
import FieldSelection from 'components/JobSelectionInputs/FieldSelection';
import ShiftsSelection from 'components/JobSelectionInputs/ShiftsSelection';
import WorkLanguageSelection from 'components/JobSelectionInputs/WorkLanguageSelection';
import WorkRelationshipTypeSelection from 'components/JobSelectionInputs/WorkRelationshipTypeSelection';
import WorkerTypeSelection from 'components/JobSelectionInputs/WorkerTypeSelection';

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
		{step === EOfferSelectionSteps.FIELD && (
			<FieldSelection params={params} setParams={setParams} />
		)}
		{step === EOfferSelectionSteps.LANGUAGE && (
			<WorkLanguageSelection params={params} setParams={setParams} />
		)}
		{step === EOfferSelectionSteps.SHIFT && (
			<ShiftsSelection params={params} setParams={setParams} />
		)}
		{step === EOfferSelectionSteps.WORK_RELATIONSHIP && (
			<WorkRelationshipTypeSelection params={params} setParams={setParams} />
		)}
		{step === EOfferSelectionSteps.WORKER_TYPE && (
			<WorkerTypeSelection params={params} setParams={setParams} />
		)}
	</Box>
);

export default StepSwitch;
