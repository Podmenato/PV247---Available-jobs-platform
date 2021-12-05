import React from 'react';
import { AppBar, Button, Container, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

import { EPaths } from 'enums/EPaths';
import { signOut } from 'utils/firebase';
import { useTranslation } from 'hooks/useTranslation';
import useUser from 'hooks/useUser';
import LanguageSwitch from 'components/LanguageSwitch';

const NavigationAppBar = () => {
	const t = useTranslation();
	const user = useUser();

	return (
		<AppBar position="fixed" sx={{ padding: '0 50px' }}>
			<Container maxWidth="sm">
				<Toolbar disableGutters sx={{ gap: 2 }}>
					<LanguageSwitch />
					<Button
						variant="text"
						component={Link}
						to={EPaths.HOME}
						sx={{ color: 'white' }}
					>
						{t('home')}
					</Button>
					<Button
						variant="text"
						component={Link}
						to={EPaths.LIST}
						sx={{ color: 'white' }}
					>
						{t('offers')}
					</Button>
					<Button
						variant="text"
						component={Link}
						to={EPaths.TRENDING}
						sx={{ color: 'white' }}
					>
						{t('trending')}
					</Button>
					{user && (
						<Button
							variant="text"
							component={Link}
							to={EPaths.FAVORITES}
							sx={{ color: 'white' }}
						>
							{t('favorite_offers')}
						</Button>
					)}
					{user && (
						<Button
							variant="text"
							component={Link}
							to={EPaths.SETTINGS}
							sx={{ color: 'white' }}
						>
							{t('settings')}
						</Button>
					)}
					{!user && (
						<Button
							variant="text"
							component={Link}
							to={EPaths.LOGIN}
							sx={{ color: 'white', marginLeft: 'auto' }}
						>
							{t('login')}
						</Button>
					)}
					{user && (
						<Button
							variant="text"
							onClick={signOut}
							sx={{ color: 'white', marginLeft: 'auto' }}
						>
							{t('logout')}
						</Button>
					)}
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default NavigationAppBar;
