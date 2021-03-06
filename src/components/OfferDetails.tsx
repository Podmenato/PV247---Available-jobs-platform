import React from 'react';
import {
	Grid,
	Typography,
	Card,
	CardActions,
	CardContent,
	List,
	ListItem,
	ListItemIcon,
	ListItemText
} from '@mui/material';
import {
	AttachMoney,
	AccessTime,
	School,
	PlaylistAddCheck,
	Timelapse
} from '@mui/icons-material';

import { useTranslation } from 'hooks/useTranslation';
import { IJobOffer } from 'interfaces/IJobOffer';

import FavoriteButton from './FavoriteButton';

type Props = {
	offerId: string;
	jobParams: IJobOffer;
};

const OfferDetails: React.FC<Props> = ({ jobParams, offerId }) => {
	const t = useTranslation();

	return (
		<Grid item xs={12} md={8}>
			<Card sx={{ padding: '1em' }}>
				<CardActions sx={{ justifyContent: 'flex-end' }}>
					<div>
						<FavoriteButton offerId={offerId} />
					</div>
				</CardActions>
				<CardContent>
					<div>
						<Typography variant="h4">{jobParams?.PROFESE?.nazev}</Typography>
						<Typography variant="body1">
							{jobParams?.PROFESE?.doplnek}
						</Typography>
					</div>
					{jobParams?.OBOR?.nazev && <strong>{jobParams?.OBOR?.nazev}</strong>}
					<hr />
					<List>
						<ListItem disablePadding>
							<ListItemIcon>
								<School />
							</ListItemIcon>
							<ListItemText
								primary={jobParams?.MIN_VZDELANI?.nazev}
								secondary={t('required_education')}
							/>
						</ListItem>
						<ListItem disablePadding>
							<ListItemIcon>
								<PlaylistAddCheck />
							</ListItemIcon>
							<ListItemText
								primary={Object.entries(jobParams?.VHODNE_PRO)
									.filter(([_, val]) => val === 'A')
									.map(
										([key, _]) =>
											(key === 'absolventySs' ||
												key === 'absolventyVs' ||
												key === 'azylanty' ||
												key === 'bezbar' ||
												key === 'cizince' ||
												key === 'ozp') &&
											t(key)
									)}
								secondary={t('suitable_for')}
							/>
						</ListItem>
						<ListItem disablePadding>
							<ListItemIcon>
								<AccessTime />
							</ListItemIcon>
							<ListItemText
								primary={Object.entries(jobParams?.PRACPRAVNI_VZTAH)
									.filter(([_, val]) => val === 'A')
									.map(
										([key, _]) =>
											(key === 'ppvztahDpc' ||
												key === 'ppvztahDpp' ||
												key === 'ppvztahPpPlny' ||
												key === 'ppvztahPpZkrac' ||
												key === 'ppvztahSp') &&
											t(key)
									)}
								secondary={t('employment_type')}
							/>
						</ListItem>
						<ListItem disablePadding>
							<ListItemIcon>
								<Timelapse />
							</ListItemIcon>
							<ListItemText
								primary={jobParams?.SMENNOST?.nazev}
								secondary={t('shifts')}
							/>
						</ListItem>
						<ListItem disablePadding>
							<ListItemIcon>
								<AttachMoney />
							</ListItemIcon>
							<ListItemText
								primary={`${jobParams?.MZDA?.min} K?? / ${jobParams?.MZDA?.typMzdy}`}
								secondary={t('minimum_salary')}
							/>
						</ListItem>
					</List>
					<hr />
					{jobParams?.POZNAMKA?.split('\r\n').map(
						(line: string, id: number) => (
							<p key={id}>{line}</p>
						)
					)}
				</CardContent>
			</Card>
		</Grid>
	);
};

export default OfferDetails;
