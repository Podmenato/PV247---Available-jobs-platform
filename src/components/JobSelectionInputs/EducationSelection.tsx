import React, { FC } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

import { ISearchParams } from 'interfaces/ISearchParams';
import { ALL_EDUCATION, EEducation } from 'enums/EEducation';
import { isEducationChecked } from 'utils/params';

type TProps = {
	params: ISearchParams;
	setParams: (params: ISearchParams) => void;
};

const EducationSelection: FC<TProps> = ({ params, setParams }) => {
	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		label: EEducation
	) => {
		const newParameters = { ...params };
		switch (label) {
			case EEducation.A: {
				newParameters.education.A = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EEducation.C: {
				newParameters.education.C = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EEducation.H: {
				newParameters.education.H = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EEducation.K: {
				newParameters.education.K = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EEducation.T: {
				newParameters.education.T = event.target.checked;
				setParams(newParameters);
				return;
			}
			default: {
				return;
			}
		}
	};

	return (
		<FormGroup>
			{ALL_EDUCATION.map(education => (
				<FormControlLabel
					key={education}
					control={
						<Checkbox
							checked={isEducationChecked(params, education)}
							onChange={event => handleChange(event, education)}
						/>
					}
					label={education}
				/>
			))}
		</FormGroup>
	);
};

export default EducationSelection;
