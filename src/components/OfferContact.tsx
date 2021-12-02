import {
	Grid,
	Card,
	List,
	ListItem,
	ListItemText,
	CardMedia,
	Typography,
	ListItemButton,
	ListItemIcon,
	Button
} from '@mui/material';
import { Email, Phone } from '@mui/icons-material';

import { useTranslation } from 'hooks/useTranslation';

type Props = {
	jobParams: Record<string, any>;
};

const OfferContact: React.FC<Props> = ({ jobParams }) => {
	const t = useTranslation();

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
				<CardMedia>
					<img
						src="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/609147088669907f652110b0_report-an-issue(about-maps).jpeg"
						alt=""
						width="100%"
					/>
				</CardMedia>
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
