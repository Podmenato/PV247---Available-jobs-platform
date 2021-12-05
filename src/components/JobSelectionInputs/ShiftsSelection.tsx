import React, { FC } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

import { ISearchParams } from 'interfaces/ISearchParams';
import { ALL_SHIFTS, EShifts } from 'enums/EShifts';
import { isShiftChecked } from 'utils/params';

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

	return (
		<FormGroup>
			{ALL_SHIFTS.map(label => (
				<FormControlLabel
					key={label}
					control={
						<Checkbox
							checked={isShiftChecked(params, label)}
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
