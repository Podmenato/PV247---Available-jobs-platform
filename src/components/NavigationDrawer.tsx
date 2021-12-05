import React, { useState } from 'react';
import {
	Box,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
	ToggleButton,
	ToggleButtonGroup
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import { EPaths } from 'enums/EPaths';
import { useLanguage, useTranslation } from 'hooks/useTranslation';
import useUser from 'hooks/useUser';
import { signOut } from 'utils/firebase';
import { ELanguage } from 'enums/ELanguage';

const NavigationDrawer = () => {
	const [open, setOpen] = useState(false);
	const [language, setLanguage] = useLanguage();
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

	const handleAlignment = (
		_event: React.MouseEvent<HTMLElement>,
		newAlignment: ELanguage | null
	) => {
		setLanguage(newAlignment ?? ELanguage.EN);
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
				<ListItem component={Link} to={EPaths.LIST}>
					<ListItemText primary={t('offers')} />
				</ListItem>
				<ListItem component={Link} to={EPaths.TRENDING}>
					<ListItemText primary={t('trending')} />
				</ListItem>
				<ListItem component={Link} to={EPaths.SETTINGS}>
					<ListItemText primary={t('settings')} />
				</ListItem>
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
				<ToggleButtonGroup
					value={language}
					exclusive
					onChange={handleAlignment}
					aria-label="language switch"
				>
					<ToggleButton
						sx={{ borderRadius: 11 }}
						value={ELanguage.SK}
						aria-label="left aligned"
					>
						SK
					</ToggleButton>
					<ToggleButton
						sx={{ borderRadius: 11 }}
						value={ELanguage.EN}
						aria-label="centered"
					>
						EN
					</ToggleButton>
				</ToggleButtonGroup>
			</Box>
			<Drawer anchor={DRAWER_ANCHOR} open={open} onClose={toggleDrawer(false)}>
				{list()}
			</Drawer>
		</>
	);
};

export default NavigationDrawer;
