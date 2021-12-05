import * as React from 'react';
import { Box, Button, Dialog, Typography } from '@mui/material';

import { useTranslation } from 'hooks/useTranslation';
import { ISearchParams } from 'interfaces/ISearchParams';
import WorkerTypeSelection from 'components/JobSelectionInputs/WorkerTypeSelection';

type TProps = {
	params: ISearchParams;
	setParams: (params: ISearchParams) => void;
};

const WorkerTypeFilter: React.FC<TProps> = ({ params, setParams }) => {
	const t = useTranslation();
	const [isPopupOpen, setIsPopupOpen] = React.useState(false);

	const handleClick = () => {
		setIsPopupOpen(true);
	};

	const handleClose = () => {
		setIsPopupOpen(false);
	};

	return (
		<Box sx={{ marginRight: '10px' }}>
			<Button variant="contained" onClick={handleClick}>
				{t('suitable_for')}
			</Button>
			<Dialog open={isPopupOpen} onClose={handleClose}>
				<Box sx={{ padding: 2, width: '30vw' }}>
					<Typography variant="h6">{t('suitable_for')}</Typography>
					<WorkerTypeSelection params={params} setParams={setParams} />
				</Box>
			</Dialog>
		</Box>
	);
};

export default WorkerTypeFilter;
