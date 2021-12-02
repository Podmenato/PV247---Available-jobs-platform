import React, { useState } from 'react';
import { Paper } from '@mui/material';
import { LatLng } from 'leaflet';

import JobPinsDisplayMap from 'components/JobPinsDisplayMap';

enum ESearchListDisplay {
	MAP = 'MAP',
	LIST = 'List'
}

const Home = () => {
	const [displayMode, setDisplayMode] = useState(ESearchListDisplay.MAP);

	const handleAlignment = (
		_event: React.MouseEvent<HTMLElement>,
		newDisplayMode: ESearchListDisplay | null
	) => {
		if (newDisplayMode !== null) {
			setDisplayMode(newDisplayMode);
		}
	};

	return (
		<Paper>
			<JobPinsDisplayMap markerPosition={new LatLng(49.804, 15.815)} />
		</Paper>
	);
};

export default Home;
