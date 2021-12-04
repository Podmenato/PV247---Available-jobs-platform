import * as React from 'react';
import {
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	InputLabel,
	Paper,
	TextField,
	Typography
} from '@mui/material';

import { useTranslation } from 'hooks/useTranslation';
import { ALL_WORKER_TYPES, EWorkerType } from 'enums/EWorkerType';

type TProps = {
	salaryValue: string;
	workerTypeValues: { [key in EWorkerType]: boolean };
	onSalaryValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onWorkerTypeValuesChange: (
		event: React.ChangeEvent<HTMLInputElement>
	) => void;
};

const Filter: React.FC<TProps> = ({
	salaryValue,
	workerTypeValues,
	onSalaryValueChange,
	onWorkerTypeValuesChange
}) => {
	const t = useTranslation();

	return (
		<Paper sx={{ width: '100%', padding: 2 }}>
			<Typography variant="h6" sx={{ marginBottom: '10px' }}>
				Filter
			</Typography>
			<div style={{ marginBottom: '20px' }}>
				<InputLabel>{t('minimum_salary')}</InputLabel>
				<TextField value={salaryValue} onChange={onSalaryValueChange} />
			</div>
			<div style={{ marginBottom: '20px' }}>
				<FormControl>
					<FormLabel>{t('suitable_for')}</FormLabel>
					<FormGroup>
						{ALL_WORKER_TYPES.map((workerType: EWorkerType) => (
							<FormControlLabel
								key={workerType}
								control={
									<Checkbox
										name={workerType}
										checked={workerTypeValues[workerType]}
										onChange={onWorkerTypeValuesChange}
									/>
								}
								label={t(workerType)}
							/>
						))}
					</FormGroup>
				</FormControl>
			</div>
			<Button>{t('apply_filter')}</Button>
		</Paper>
	);
};

export default Filter;
