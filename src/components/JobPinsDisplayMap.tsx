import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { LatLng } from 'leaflet';
import { Box } from '@mui/material';
import { SxProps } from '@mui/system';

type IProps = {
	markerPosition: LatLng;
	sx?: SxProps;
};

const JobPinsDisplayMap = (props: IProps) => {
	const { markerPosition } = props;
	const defaultStyles = { height: 500, width: 500, padding: 1 };

	return (
		<Box component="div" sx={props.sx ?? defaultStyles}>
			<MapContainer
				center={markerPosition}
				zoom={13}
				scrollWheelZoom
				style={{ height: '100%', width: '100%' }}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={markerPosition} />
			</MapContainer>
		</Box>
	);
};

export default JobPinsDisplayMap;
