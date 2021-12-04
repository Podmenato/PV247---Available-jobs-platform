import React from 'react';
import { AppBar, Button, Container, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

import { EPaths } from 'enums/EPaths';
import { signOut } from 'utils/firebase';
import { useTranslation } from 'hooks/useTranslation';
import useUser from 'hooks/useUser';

const NavigationAppBar = () => {
	const t = useTranslation();
	const user = useUser();
	return (
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
	);
};

export default NavigationAppBar;
