import { Box, Container, Grid, Link } from '@mui/material';

const Footer = () => (
	<footer>
		<Box
			px={{ xs: 1, sm: 3 }}
			py={{ xs: 1, sm: 3 }}
			bgcolor="secondary.light"
			color="primary.main"
			minHeight="10vh"
			alignContent="center"
			justifyContent="center"
			alignItems="center"
			justifyItems="center"
		>
			<Container maxWidth="lg">
				<Box textAlign="center">
					Available jobs platform &reg; {new Date().getFullYear()}
				</Box>
			</Container>
		</Box>
	</footer>
);

export default Footer;
