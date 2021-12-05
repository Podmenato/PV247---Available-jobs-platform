import React, { useState } from 'react';
import {
	Box,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import { EPaths } from 'enums/EPaths';
import { useTranslation } from 'hooks/useTranslation';
import useUser from 'hooks/useUser';
import { signOut } from 'utils/firebase';
import LanguageSwitch from 'components/LanguageSwitch';

const NavigationDrawer = () => {
	const [open, setOpen] = useState(false);
	const t = useTranslation();
	const user = useUser();
	const DRAWER_ANCHOR = 'right';

	const toggleDrawer =
		(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}

			setOpen(open);
		};

	const list = () => (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				<ListItem component={Link} to={EPaths.HOME}>
					<ListItemText primary={t('home')} />
				</ListItem>
				<ListItem component={Link} to={EPaths.TRENDING}>
					<ListItemText primary={t('trending')} />
				</ListItem>
				{user && (
					<ListItem component={Link} to={EPaths.FAVORITES}>
						<ListItemText primary={t('favorite_offers')} />
					</ListItem>
				)}
				{user && (
					<ListItem component={Link} to={EPaths.SETTINGS}>
						<ListItemText primary={t('settings')} />
					</ListItem>
				)}
				{user && (
					<ListItem component={Link} to={EPaths.PERSONALIZED}>
						<ListItemText primary={t('personalized')} />
					</ListItem>
				)}
				<Divider />
				{!user && (
					<ListItem component={Link} to={EPaths.LOGIN}>
						<ListItemText primary={t('login')} />
					</ListItem>
				)}
				{user && (
					<ListItem button onClick={signOut}>
						<ListItemText primary={t('logout')} />
					</ListItem>
				)}
			</List>
		</Box>
	);

	return (
		<>
			<Box sx={{ marginTop: 1 }}>
				<IconButton onClick={toggleDrawer(true)} size="large">
					<MenuIcon />
				</IconButton>
				<LanguageSwitch />
			</Box>
			<Drawer anchor={DRAWER_ANCHOR} open={open} onClose={toggleDrawer(false)}>
				{list()}
			</Drawer>
		</>
	);
};

export default NavigationDrawer;
