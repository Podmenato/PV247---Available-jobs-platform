import * as React from 'react';
import { Box, Button, Dialog, Typography } from '@mui/material';

import { useTranslation } from 'hooks/useTranslation';
import { ISearchParams } from 'interfaces/ISearchParams';
import FieldSelection from 'components/JobSelectionInputs/FieldSelection';

type TProps = {
	params: ISearchParams;
	setParams: (params: ISearchParams) => void;
};

const FieldFilter: React.FC<TProps> = ({ params, setParams }) => {
	const t = useTranslation();
	const [isPopupOpen, setIsPopupOpen] = React.useState(false);

	const handleClick = () => {
		setIsPopupOpen(true);
	};

	const handleClose = () => {
		setIsPopupOpen(false);
	};

	return (
		<Box sx={{ margin: '0 10px 10px 0' }}>
			<Button variant="contained" onClick={handleClick}>
				{t('Field')}
			</Button>
			<Dialog open={isPopupOpen} onClose={handleClose}>
				<Box sx={{ padding: 2, width: '30vw' }}>
					<Typography variant="h6">{t('Field')}</Typography>
					<FieldSelection params={params} setParams={setParams} />
				</Box>
			</Dialog>
		</Box>
	);
};

export default FieldFilter;
