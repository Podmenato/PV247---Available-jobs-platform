import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import useOffers from 'hooks/useOffers';
import { useFilter } from 'hooks/useFilter';
import { IJobOffer } from 'interfaces/IJobOffer';

const OffersList = () => {
	const location = useLocation();
	const [params] = useState(location.state.params);
	const offers = useOffers();
	const filtered = useFilter(offers, params);

	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID', hide: true },
		{ field: 'education', headerName: 'Education', width: 200 },
		{
			field: 'field',
			headerName: 'Field',
			width: 150
		},
		{
			field: 'language',
			headerName: 'Language'
		}
	];

	const mapToRows = (offer: IJobOffer) => ({
		id: offer.uid,
		education: offer.MIN_VZDELANI.nazev,
		field: offer.OBOR.nazev,
		language: offer.JAZYK?.nazev
	});

	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={filtered.map((offer: IJobOffer) => mapToRows(offer))}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
				disableSelectionOnClick
			/>
		</div>
	);
};

export default OffersList;
