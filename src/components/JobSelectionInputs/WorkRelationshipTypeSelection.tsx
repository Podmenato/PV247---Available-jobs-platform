import React, { FC } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

import { ISearchParams } from 'interfaces/ISearchParams';
import {
	ALL_RELATIONSHIP_TYPES,
	EWorkRelationshipType
} from 'enums/EWorkRelationshipType';

type TProps = {
	params: ISearchParams;
	setParams: (params: ISearchParams) => void;
};

const WorkRelationshipTypeSelection: FC<TProps> = ({ params, setParams }) => {
	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		label: EWorkRelationshipType
	) => {
		const newParameters = { ...params };
		switch (label) {
			case EWorkRelationshipType.DPC: {
				newParameters.relationship.DPC = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EWorkRelationshipType.FULL: {
				newParameters.relationship.FULL = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EWorkRelationshipType.DPP: {
				newParameters.relationship.DPP = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EWorkRelationshipType.PART: {
				newParameters.relationship.PART = event.target.checked;
				setParams(newParameters);
				return;
			}
			case EWorkRelationshipType.SP: {
				newParameters.relationship.SP = event.target.checked;
				setParams(newParameters);
				return;
			}
			default:
				return;
		}
	};

	const isChecked = (label: EWorkRelationshipType) => {
		switch (label) {
			case EWorkRelationshipType.SP:
				return params.relationship.SP;
			case EWorkRelationshipType.PART:
				return params.relationship.PART;
			case EWorkRelationshipType.DPP:
				return params.relationship.DPP;
			case EWorkRelationshipType.FULL:
				return params.relationship.FULL;
			case EWorkRelationshipType.DPC:
				return params.relationship.DPC;
			default: {
				return false;
			}
		}
	};
	return (
		<FormGroup>
			{ALL_RELATIONSHIP_TYPES.map(label => (
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

export default WorkRelationshipTypeSelection;
