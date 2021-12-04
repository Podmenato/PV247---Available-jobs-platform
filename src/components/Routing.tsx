import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { EPaths } from 'enums/EPaths';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Settings from 'components/Settings';
import Offer from 'pages/Offer';
import Favorites from 'pages/Favorites';
import Trending from 'pages/Trending';
import PersonalizedProfile from 'components/PersonalizedProfile'

const Routing = () => (
	<Routes>
		<Route path={EPaths.HOME} element={<Home />} />
		<Route path={EPaths.LOGIN} element={<Login />} />
		<Route path={EPaths.SETTINGS} element={<Settings />} />
		<Route path={EPaths.OFFER} element={<Offer />} />
		<Route path={EPaths.FAVORITES} element={<Favorites />} />
		<Route path={EPaths.TRENDING} element={<Trending />} />
		<Route path={EPaths.PERSONALIZED} element={<PersonalizedProfile />} />
	</Routes>
);

export default Routing;
