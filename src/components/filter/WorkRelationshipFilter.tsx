import * as React from 'react';
import { Box, Button, Dialog, Typography } from '@mui/material';

import { useTranslation } from 'hooks/useTranslation';
import { ISearchParams } from 'interfaces/ISearchParams';
import WorkRelationshipTypeSelection from 'components/JobSelectionInputs/WorkRelationshipTypeSelection';

type TProps = {
	params: ISearchParams;
	setParams: (params: ISearchParams) => void;
};

const WorkRelationshipFilter: React.FC<TProps> = ({ params, setParams }) => {
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
				{t('Work_Relationship')}
			</Button>
			<Dialog open={isPopupOpen} onClose={handleClose}>
				<Box sx={{ padding: 2, width: '30vw' }}>
					<Typography variant="h6">{t('Work_Relationship')}</Typography>
					<WorkRelationshipTypeSelection
						params={params}
						setParams={setParams}
					/>
				</Box>
			</Dialog>
		</Box>
	);
};

export default WorkRelationshipFilter;
