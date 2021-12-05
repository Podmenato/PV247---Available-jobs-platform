import React, { FC } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

import { ISearchParams } from 'interfaces/ISearchParams';
import { ALL_FIELDS, EField } from 'enums/EField';

type TProps = {
	params: ISearchParams;
	setParams: (params: ISearchParams) => void;
};

const FieldSelection: FC<TProps> = ({ params, setParams }) => {
	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		label: EField
	) => {
		const newParameters = { ...params };
		switch (label) {
			case EField.DEFENCE: {
				newParameters.field.DEFENCE = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EField.FACTORY: {
				newParameters.field.FACTORY = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EField.HEALTHCARE: {
				newParameters.field.HEALTHCARE = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EField.IT: {
				newParameters.field.IT = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EField.MONEY: {
				newParameters.field.MONEY = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EField.SERVICES: {
				newParameters.field.SERVICES = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EField.TRAFFIC: {
				newParameters.field.TRAFFIC = event.target.checked;
				setParams(newParameters);
				return;
			}
			default:
				return;
		}
	};

	const isChecked = (label: EField) => {
		switch (label) {
			case EField.TRAFFIC:
				return params.field.TRAFFIC;
			case EField.SERVICES:
				return params.field.SERVICES;
			case EField.MONEY:
				return params.field.MONEY;
			case EField.IT:
				return params.field.IT;
			case EField.HEALTHCARE:
				return params.field.HEALTHCARE;
			case EField.FACTORY:
				return params.field.FACTORY;
			case EField.DEFENCE:
				return params.field.DEFENCE;
			default: {
				return false;
			}
		}
	};
	return (
		<FormGroup>
			{ALL_FIELDS.map(label => (
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

export default FieldSelection;
