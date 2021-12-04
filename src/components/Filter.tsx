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

const Filter = () => {
	const t = useTranslation();

	return (
		<Paper sx={{ width: '100%', padding: 2 }}>
			<Typography variant="h6">Filter</Typography>
			<FormControl>
				<FormLabel>{t('suitable_for')}</FormLabel>
			</FormControl>
			<Button>{t('apply_filter')}</Button>
		</Paper>
	);
};

export default Filter;
