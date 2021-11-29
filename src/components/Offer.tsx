import {
	Grid,
	Typography,
	Button,
	Card,
	CardActions,
	CardContent,
	IconButton,
	CardMedia,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Backdrop,
	CircularProgress
} from '@mui/material';
import {
	Email,
	Phone,
	Star,
	StarOutline,
	ShareOutlined,
	AttachMoney,
	AccessTime,
	School,
	PlaylistAddCheck,
	Timelapse
} from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios, { AxiosResponse } from 'axios';

const Offer = () => {
	const { id } = useParams();
	const [jobParams, setJobParams] = useState<Record<string, any>>();
	const [loaded, setLoaded] = useState<boolean>(false);

	useEffect(() => {
		axios
			.request({
				url: `https://api.apitalks.store/volna-pracovni-mista/${id}`,
				method: 'GET',
				headers: {
					'x-api-key': '27DMzQacy52IFIj5RXYal3MVqtqmTrXb5W17CoO7'
				}
			})
			.then(
				(response: AxiosResponse) => {
					console.log(response.data);
					setJobParams(response.data);
					setLoaded(true);
				},
				() => {
					setJobParams(undefined);
					setLoaded(true);
				}
			);
	}, [id]);

	const [isFavorite, setIsFavorite] = useState<boolean>(false);

	return (
		<>
			<Backdrop sx={{ color: '#fff', zIndex: 999 }} open={!loaded}>
				<CircularProgress color="inherit" />
			</Backdrop>
			{jobParams ? (
				<Grid container spacing={2}>
					<Grid item xs={12} md={8}>
						<Card sx={{ padding: '1em' }}>
							<CardActions sx={{ justifyContent: 'flex-end' }}>
								<div>
									<IconButton onClick={() => alert('share')}>
										<ShareOutlined />
									</IconButton>
									<IconButton onClick={() => setIsFavorite(!isFavorite)}>
										{isFavorite ? (
											<Star sx={{ color: 'star' }} />
										) : (
											<StarOutline sx={{ color: 'star' }} />
										)}
									</IconButton>
								</div>
							</CardActions>
							<CardContent>
								<div>
									<Typography variant="h4">
										{jobParams?.PROFESE?.nazev}
									</Typography>
									<Typography variant="body1">
										{jobParams?.PROFESE?.doplnek}
									</Typography>
								</div>
								{jobParams?.OBOR?.nazev && (
									<strong>{jobParams?.OBOR?.nazev}</strong>
								)}
								<hr />
								<List>
									<ListItem disablePadding>
										<ListItemIcon>
											<School />
										</ListItemIcon>
										<ListItemText
											primary={jobParams?.MIN_VZDELANI?.nazev}
											secondary="Required education"
										/>
									</ListItem>
									<ListItem disablePadding>
										<ListItemIcon>
											<PlaylistAddCheck />
										</ListItemIcon>
										<ListItemText
											primary={Object.entries(jobParams?.VHODNE_PRO)
												.filter(([_, val]) => val === 'A')
												.map(([key, _]) => key)}
											secondary="Suitable for"
										/>
									</ListItem>
									<ListItem disablePadding>
										<ListItemIcon>
											<AccessTime />
										</ListItemIcon>
										<ListItemText
											primary={Object.entries(jobParams?.PRACPRAVNI_VZTAH)
												.filter(([_, val]) => val === 'A')
												.map(([key, _]) => key)}
											secondary="Employment type"
										/>
									</ListItem>
									<ListItem disablePadding>
										<ListItemIcon>
											<Timelapse />
										</ListItemIcon>
										<ListItemText
											primary={jobParams?.SMENNOST?.nazev}
											secondary="Shifts"
										/>
									</ListItem>
									<ListItem disablePadding>
										<ListItemIcon>
											<AttachMoney />
										</ListItemIcon>
										<ListItemText
											primary={`${jobParams?.MZDA?.min} Kč / ${jobParams?.MZDA?.typMzdy}`}
											secondary="Minimum salary"
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
							<Typography variant="h5">Contact person</Typography>
							<List>
								<ListItem disablePadding>
									<ListItemText primary={jobParams?.KONOS?._} />
								</ListItem>
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
							</List>
							{jobParams?.KONOS?.email && (
								<Button
									variant="contained"
									href={`mailto:${jobParams?.KONOS?.email}`}
									sx={{
										width: '100%',
										margin: '1em 0'
									}}
								>
									<Email /> &nbsp;email
								</Button>
							)}
							{jobParams?.KONOS?.telefon && (
								<Button
									variant="outlined"
									href={`tel:${jobParams?.KONOS?.telefon}`}
									sx={{
										width: '100%'
									}}
								>
									<Phone /> &nbsp;phone
								</Button>
							)}
						</Card>
					</Grid>
				</Grid>
			) : (
				loaded && (
					<Grid container spacing={2}>
						<Grid item xs={12} md={12}>
							<Card sx={{ padding: '1em' }}>
								<Typography variant="h4">
									Not found. Offer does not exist or the server is not
									responding, please try again later.
								</Typography>
							</Card>
						</Grid>
					</Grid>
				)
			)}
		</>
	);
};

export default Offer;
