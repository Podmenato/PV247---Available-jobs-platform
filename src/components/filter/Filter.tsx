import * as React from 'react';
import { Box } from '@mui/material';

import EducationFilter from 'components/filter/EducationFilter';
import { ISearchParams } from 'interfaces/ISearchParams';
import ActiveParams from 'components/filter/ActiveParams';
import WorkerTypeFilter from 'components/filter/WorkerTypeFilter';
import FieldFilter from 'components/filter/FieldFilter';
import ShiftsFilter from 'components/filter/ShiftsFilter';
import WorkLanguageFilter from 'components/filter/WorkLanguageFilter';
import WorkRelationshipFilter from 'components/filter/WorkRelationshipFilter';

type TProps = {
	params: ISearchParams;
	setParams: (params: ISearchParams) => void;
};

const Filter: React.FC<TProps> = ({ params, setParams }) => (
	<Box>
		<Box sx={{ marginBottom: '20px' }}>
			<ActiveParams params={params} />
		</Box>
		<Box sx={{ display: 'flex' }}>
			<EducationFilter params={params} setParams={setParams} />
			<WorkerTypeFilter params={params} setParams={setParams} />
			<FieldFilter params={params} setParams={setParams} />
			<ShiftsFilter params={params} setParams={setParams} />
			<WorkLanguageFilter params={params} setParams={setParams} />
			<WorkRelationshipFilter params={params} setParams={setParams} />
		</Box>
	</Box>
);

export default Filter;
