import React, { FC } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

import { ISearchParams } from 'interfaces/ISearchParams';
import { ALL_WORKER_TYPES, EWorkerType } from 'enums/EWorkerType';

type TProps = {
	params: ISearchParams;
	setParams: (params: ISearchParams) => void;
};

const WorkerTypeSelection: FC<TProps> = ({ params, setParams }) => {
	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		label: EWorkerType
	) => {
		const newParameters = { ...params };
		switch (label) {
			case EWorkerType.AZYLANT: {
				newParameters.worker_type.AZYLANT = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EWorkerType.COLLEGE_GRADUATE: {
				newParameters.worker_type.COLLEGE_GRADUATE = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EWorkerType.FOREIGNER: {
				newParameters.worker_type.FOREIGNER = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EWorkerType.HIGH_SHOOL_GRADUATE: {
				newParameters.worker_type.HIGH_SHOOL_GRADUATE = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EWorkerType.OZP: {
				newParameters.worker_type.OZP = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EWorkerType.WHEELCHAIR: {
				newParameters.worker_type.WHEELCHAIR = event.target.checked;
				setParams(newParameters);
				return;
			}
			default:
				return;
		}
	};

	const isChecked = (label: EWorkerType) => {
		switch (label) {
			case EWorkerType.WHEELCHAIR:
				return params.worker_type.WHEELCHAIR;
			case EWorkerType.OZP:
				return params.worker_type.OZP;
			case EWorkerType.HIGH_SHOOL_GRADUATE:
				return params.worker_type.HIGH_SHOOL_GRADUATE;
			case EWorkerType.FOREIGNER:
				return params.worker_type.FOREIGNER;
			case EWorkerType.COLLEGE_GRADUATE:
				return params.worker_type.COLLEGE_GRADUATE;
			case EWorkerType.AZYLANT:
				return params.worker_type.AZYLANT;
			default: {
				return false;
			}
		}
	};
	return (
		<FormGroup>
			{ALL_WORKER_TYPES.map(label => (
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

export default WorkerTypeSelection;
