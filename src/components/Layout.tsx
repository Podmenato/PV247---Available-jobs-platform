import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Toolbar, Button } from '@mui/material';

import { EPaths } from 'enums/EPaths';
import { useTranslation } from 'hooks/useTranslation';
import useUser from 'hooks/useUser';
import { signOut } from 'utils/firebase';

const Layout: React.FC = ({ children }) => {
	const t = useTranslation();
	const user = useUser();

	return (
		<>
			<AppBar position="fixed">
				<Container maxWidth="sm">
					<Toolbar disableGutters sx={{ gap: 2 }}>
						<Button variant="contained" component={Link} to={EPaths.HOME}>
							{t('home')}
						</Button>
						<Button variant="contained" component={Link} to={EPaths.TRENDING}>
							{t('trending')}
						</Button>
						{user && (
							<Button variant="contained" component={Link} to={EPaths.SETTINGS}>
								{t('settings')}
							</Button>
						)}
						{!user && (
							<Button variant="contained" component={Link} to={EPaths.LOGIN}>
								{t('login')}
							</Button>
						)}
						{user && (
							<Button variant="contained" onClick={signOut}>
								{t('logout')}
							</Button>
						)}
					</Toolbar>
				</Container>
			</AppBar>

			<Container
				maxWidth="lg"
				component="main"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: '100vh',
					pt: 8,
					gap: 2
				}}
			>
				{children}
			</Container>
		</>
	);
};

export default Layout;
