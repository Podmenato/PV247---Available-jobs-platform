import {
	Grid,
	Typography,
	Button,
	Card,
	CardActions,
	CardContent,
	IconButton,
	CardMedia,
	TextField,
	FormControl,
	Input
} from '@mui/material';
import {
	Email,
	Phone,
	Star,
	StarOutline,
	ShareOutlined,
	Edit,
	Add,
	Send
} from '@mui/icons-material';
import { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/system';

const Offer = () => {
	const { id } = useParams();
	const [isFavorite, setIsFavorite] = useState<boolean>(false);
	const [fileName, setFileName] = useState<string>();
	const isAuthor = true; //right now, everyone is the author:)
	const handleUpload = (event: ChangeEvent) => {
		const target = event.target as HTMLInputElement;
		setFileName(target?.files?.item(0)?.name);
	};

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={8}>
				<Card sx={{ padding: '1em' }}>
					<CardActions sx={{ justifyContent: 'space-between' }}>
						<Typography variant="h3">Job title</Typography>
						<div>
							{isAuthor && (
								<IconButton onClick={() => alert('edit')}>
									<Edit />
								</IconButton>
							)}
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
						Id: <strong>{id}</strong>
						<br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
						<FormControl sx={{ width: '100%' }}>
							<TextField
								label="First name"
								variant="standard"
								sx={{ width: '50%', marginBottom: '1em' }}
							/>
							<TextField
								label="Last name"
								variant="standard"
								sx={{ width: '50%', marginBottom: '1em' }}
							/>
							<TextField
								label="Email"
								variant="standard"
								sx={{ width: '50%', marginBottom: '1em' }}
							/>
							<Button
								variant="contained"
								component="label"
								sx={{
									width: '200px',
									borderRadius: '20px',
									marginBottom: '5px'
								}}
							>
								<Add /> Upload resume
								<input type="file" hidden onChange={e => handleUpload(e)} />
							</Button>
							<Typography sx={{ display: 'inline-block' }}>
								{fileName}
							</Typography>
							<TextField multiline label="More info" rows="5" />
							<br />
							<Button variant="contained" type="submit">
								<Send /> &nbsp;Send inquiry
							</Button>
						</FormControl>
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={12} md={4}>
				<Card sx={{ padding: '1em' }}>
					<Typography>Company details (address w/ map)</Typography>
					<CardMedia>
						<img
							src="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/609147088669907f652110b0_report-an-issue(about-maps).jpeg"
							alt=""
							width="100%"
						/>
					</CardMedia>
					<Button
						variant="contained"
						href="mailto:#"
						sx={{
							width: '100%',
							margin: '1em 0'
						}}
					>
						<Email /> &nbsp;email
					</Button>
					<Button
						variant="outlined"
						href="tel:#"
						sx={{
							width: '100%'
						}}
					>
						<Phone /> &nbsp;phone
					</Button>
				</Card>
			</Grid>
		</Grid>
	);
};

export default Offer;
