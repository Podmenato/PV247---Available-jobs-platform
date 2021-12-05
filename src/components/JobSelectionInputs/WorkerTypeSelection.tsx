import React, { FC } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

import { ISearchParams } from 'interfaces/ISearchParams';
import { ALL_WORKER_TYPES, EWorkerType } from 'enums/EWorkerType';
import { isWorkerTypeChecked } from 'utils/params';

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
				newParameters.worker_type.azylanty = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EWorkerType.COLLEGE_GRADUATE: {
				newParameters.worker_type.absolventyVs = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EWorkerType.FOREIGNER: {
				newParameters.worker_type.cizince = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EWorkerType.HIGH_SHOOL_GRADUATE: {
				newParameters.worker_type.absolventySs = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EWorkerType.OZP: {
				newParameters.worker_type.ozp = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EWorkerType.WHEELCHAIR: {
				newParameters.worker_type.bezbar = event.target.checked;
				setParams(newParameters);
				return;
			}
			default:
				return;
		}
	};

	return (
		<FormGroup>
			{ALL_WORKER_TYPES.map(label => (
				<FormControlLabel
					key={label}
					control={
						<Checkbox
							checked={isWorkerTypeChecked(params, label)}
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
