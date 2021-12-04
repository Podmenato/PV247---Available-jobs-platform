import React, { FC } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

import { ISearchParams } from 'interfaces/ISearchParams';
import { ALL_SHIFTS, EShifts } from 'enums/EShifts';

type TProps = {
	params: ISearchParams;
	setParams: (params: ISearchParams) => void;
};

const ShiftsSelection: FC<TProps> = ({ params, setParams }) => {
	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		label: EShifts
	) => {
		const newParameters = { ...params };
		switch (label) {
			case EShifts.FLEX: {
				newParameters.shifts.FLEX = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EShifts.ONE: {
				newParameters.shifts.ONE = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EShifts.TURNUS: {
				newParameters.shifts.TURNUS = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EShifts.TWO: {
				newParameters.shifts.TWO = event.target.checked;
				setParams(newParameters);
				return;
			}
			default:
				return;
		}
	};

	const isChecked = (label: EShifts) => {
		switch (label) {
			case EShifts.TWO:
				return params.shifts.TWO;
			case EShifts.TURNUS:
				return params.shifts.TURNUS;
			case EShifts.ONE:
				return params.shifts.ONE;
			case EShifts.FLEX:
				return params.shifts.FLEX;
			default: {
				return false;
			}
		}
	};
	return (
		<FormGroup>
			{ALL_SHIFTS.map(label => (
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

export default ShiftsSelection;
