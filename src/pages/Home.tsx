import React, { useState } from 'react';
import { Paper, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

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
			<Stack direction="row" spacing={4}>
				<ToggleButtonGroup
					value={displayMode}
					exclusive
					onChange={handleAlignment}
					aria-label="display mode"
				>
					<ToggleButton value={ESearchListDisplay.MAP} aria-label="map">
						<MapOutlinedIcon />
					</ToggleButton>
					<ToggleButton value={ESearchListDisplay.LIST} aria-label="list">
						<ListOutlinedIcon />
					</ToggleButton>
				</ToggleButtonGroup>
			</Stack>
		</Paper>
	);
};

export default Home;
