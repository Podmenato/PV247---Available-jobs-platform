import {
	Grid,
	Card,
	List,
	ListItem,
	ListItemText,
	Typography,
	ListItemButton,
	ListItemIcon
} from '@mui/material';
import { Email, Phone } from '@mui/icons-material';
import { LatLng } from 'leaflet';
import { FC, useEffect, useState } from 'react';

import { useTranslation } from 'hooks/useTranslation';
import { IJobOffer } from 'interfaces/IJobOffer';
import JobPinsDisplayMap from 'components/JobPinsDisplayMap';
import { apiFindCoordinatesByAddress } from 'api/apiFindCoordinatesByAddress';

type Props = {
	jobParams: IJobOffer;
};

const OfferContact: FC<Props> = ({ jobParams }) => {
	const t = useTranslation();
	const [coordinates, setCoordinates] = useState<LatLng | undefined>();
	useEffect(() => {
		const findCoordinates = async () => {
			const response = await apiFindCoordinatesByAddress(
				`${jobParams.PRACOVISTE.ulice} ${jobParams.PRACOVISTE.cp} ${jobParams.PRACOVISTE.obec}`
			);
			const place = response[0];
			setCoordinates(new LatLng(place.lat, place.lon));
		};
		findCoordinates();
	}, [jobParams]);

	return (
		<Grid item xs={12} md={4}>
			<Card sx={{ padding: '1em' }}>
				<List>
					<ListItem disablePadding>
						<ListItemText
							primary={jobParams?.FIRMA?.nazev}
							secondary={`IČO: ${jobParams?.FIRMA?.ic}`}
						/>
					</ListItem>
					{jobParams?.PRACOVISTE?._.split(', ').map(
						(text: string, id: number) => (
							<ListItem key={id} disablePadding>
								<ListItemText primary={text} />
							</ListItem>
						)
					)}
				</List>
				<JobPinsDisplayMap
					sx={{ height: 200, width: '100%', padding: 1 }}
					markerPosition={coordinates}
				/>
				<Typography variant="h5">{t('contact_person')}</Typography>
				<List>
					<ListItem disablePadding>
						<ListItemText primary={jobParams?.KONOS?._} />
					</ListItem>
					{jobParams?.KONOS?.email && (
						<ListItem disablePadding>
							<ListItemButton
								component="a"
								href={`mailto:${jobParams?.KONOS?.email}`}
							>
								<ListItemIcon>
									<Email />
								</ListItemIcon>
								<ListItemText primary={jobParams?.KONOS?.email} />
							</ListItemButton>
						</ListItem>
					)}
					{jobParams?.KONOS?.telefon && (
						<ListItem disablePadding>
							<ListItemButton
								component="a"
								href={`tel:${jobParams?.KONOS?.telefon}`}
							>
								<ListItemIcon>
									<Phone />
								</ListItemIcon>
								<ListItemText primary={jobParams?.KONOS?.telefon} />
							</ListItemButton>
						</ListItem>
					)}
				</List>
			</Card>
		</Grid>
	);
};

export default OfferContact;
