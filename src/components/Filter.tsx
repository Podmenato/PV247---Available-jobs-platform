import * as React from 'react';
import {
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
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
			<Typography variant="h6">Filter</Typography>
			<TextField
				value={salaryValue}
				onChange={onSalaryValueChange}
				label={t('minimum_salary')}
			/>
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
			<Button>{t('apply_filter')}</Button>
		</Paper>
	);
};

export default Filter;
