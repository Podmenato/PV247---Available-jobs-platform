import React, { FC } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

import { ISearchParams } from 'interfaces/ISearchParams';
import { ALL_LANGUAGES, EWorkLanguage } from 'enums/EWorkLanguage';

type TProps = {
	params: ISearchParams;
	setParams: (params: ISearchParams) => void;
};

const WorkLanguageSelection: FC<TProps> = ({ params, setParams }) => {
	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		label: EWorkLanguage
	) => {
		const newParameters = { ...params };
		switch (label) {
			case EWorkLanguage.ENG: {
				newParameters.language.ENG = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EWorkLanguage.RUS: {
				newParameters.language.RUS = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EWorkLanguage.SPA: {
				newParameters.language.SPA = event.target.checked;
				setParams(newParameters);
				return;
			}
			default:
				return;
		}
	};

	const isChecked = (label: EWorkLanguage) => {
		switch (label) {
			case EWorkLanguage.SPA:
				return params.language.SPA;
			case EWorkLanguage.RUS:
				return params.language.RUS;
			case EWorkLanguage.ENG:
				return params.language.ENG;
			default: {
				return false;
			}
		}
	};
	return (
		<FormGroup>
			{ALL_LANGUAGES.map(label => (
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

export default WorkLanguageSelection;
