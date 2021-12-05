import React, { FC } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

import { ISearchParams } from 'interfaces/ISearchParams';
import { ALL_EDUCATION, EEducation } from 'enums/EEducation';

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

	const isChecked = (label: EEducation) => {
		switch (label) {
			case EEducation.A: {
				return params.education.A;
			}
			case EEducation.C: {
				return params.education.C;
			}
			case EEducation.H: {
				return params.education.H;
			}
			case EEducation.K: {
				return params.education.K;
			}
			case EEducation.T: {
				return params.education.T;
			}
			default: {
				return false;
			}
		}
	};
	return (
		<FormGroup>
			{ALL_EDUCATION.map(label => (
				<FormControlLabel
					key={label}
					control={
						<Checkbox
							checked={isChecked(label)}
							onChange={event => handleChange(event, label)}
						/>
					}
					label={label}
				/>
			))}
		</FormGroup>
	);
};

export default EducationSelection;
