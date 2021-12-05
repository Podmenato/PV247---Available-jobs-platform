import React from 'react';
import { AppBar, Button, Container, styled, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

import { EPaths } from 'enums/EPaths';
import { signOut } from 'utils/firebase';
import { useTranslation } from 'hooks/useTranslation';
import useUser from 'hooks/useUser';
import LanguageSwitch from 'components/LanguageSwitch';

import NavigationButton from './NavigationButton';

const NavigationAppBar = () => {
	const t = useTranslation();
	const user = useUser();

	return (
		<AppBar position="fixed" sx={{ padding: '0 50px' }}>
			<Toolbar disableGutters sx={{ gap: 2 }}>
				<LanguageSwitch />
				<NavigationButton path={EPaths.HOME} text={t('home')} />
				<NavigationButton path={EPaths.TRENDING} text={t('trending')} />
				{user && (
					<NavigationButton
						path={EPaths.FAVORITES}
						text={t('favorite_offers')}
					/>
				)}
				{user && (
					<NavigationButton path={EPaths.SETTINGS} text={t('settings')} />
				)}
				{user && (
					<NavigationButton
						path={EPaths.PERSONALIZED}
						text={t('personalized')}
					/>
				)}
				{!user && <NavigationButton path={EPaths.LOGIN} text={t('login')} />}
				{user && <NavigationButton onClick={signOut} text={t('logout')} />}
			</Toolbar>
		</AppBar>
	);
};

export default NavigationAppBar;
