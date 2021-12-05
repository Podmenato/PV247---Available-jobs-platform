import * as React from 'react';
import { Box, Typography } from '@mui/material';

import { ISearchParams } from 'interfaces/ISearchParams';
import { useTranslation } from 'hooks/useTranslation';
import { ALL_EDUCATION } from 'enums/EEducation';
import {
	isEducationChecked,
	isFieldChecked,
	isLanguageChecked,
	isShiftChecked,
	isWorkerTypeChecked,
	isWorkRelationshipChecked
} from 'utils/params';
import { ALL_WORKER_TYPES } from 'enums/EWorkerType';
import { ALL_FIELDS } from 'enums/EField';
import { ALL_SHIFTS } from 'enums/EShifts';
import { ALL_LANGUAGES } from 'enums/EWorkLanguage';
import { ALL_RELATIONSHIP_TYPES } from 'enums/EWorkRelationshipType';

type TProps = {
	params: ISearchParams;
};

const ActiveParams: React.FC<TProps> = ({ params }) => {
	const t = useTranslation();

	const educationParamsString = ALL_EDUCATION.filter(education =>
		isEducationChecked(params, education)
	).join(', ');
	const fieldParamsString = ALL_FIELDS.filter(field =>
		isFieldChecked(params, field)
	).join(', ');
	const shiftsParamsString = ALL_SHIFTS.filter(shift =>
		isShiftChecked(params, shift)
	).join(', ');
	const workerTypeParamsString = ALL_WORKER_TYPES.filter(workerType =>
		isWorkerTypeChecked(params, workerType)
	).join(', ');
	const languageParamsString = ALL_LANGUAGES.filter(lang =>
		isLanguageChecked(params, lang)
	).join(', ');
	const relationshipParamsString = ALL_RELATIONSHIP_TYPES.filter(relationship =>
		isWorkRelationshipChecked(params, relationship)
	).join(', ');

	return (
		<Box>
			<Box>
				{educationParamsString.length !== 0 && (
					<Typography variant="body1" color="secondary">
						{t('Education')}:
					</Typography>
				)}
				{educationParamsString}
			</Box>
			<Box>
				{fieldParamsString.length !== 0 && (
					<Typography variant="body1" color="secondary">
						{t('Field')}:
					</Typography>
				)}
				{fieldParamsString}
			</Box>
			<Box>
				{shiftsParamsString.length !== 0 && (
					<Typography variant="body1" color="secondary">
						{t('Shift')}:
					</Typography>
				)}
				{shiftsParamsString}
			</Box>
			<Box>
				{workerTypeParamsString.length !== 0 && (
					<Typography variant="body1" color="secondary">
						{t('suitable_for')}:
					</Typography>
				)}
				{workerTypeParamsString}
			</Box>
			<Box>
				{languageParamsString.length !== 0 && (
					<Typography variant="body1" color="secondary">
						{t('Language')}:
					</Typography>
				)}
				{languageParamsString}
			</Box>
			<Box>
				{relationshipParamsString.length !== 0 && (
					<Typography variant="body1" color="secondary">
						{t('Work_Relationship')}:
					</Typography>
				)}
				{relationshipParamsString}
			</Box>
		</Box>
	);
};

export default ActiveParams;
