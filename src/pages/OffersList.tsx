import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
	DataGrid,
	GridColDef,
	GridRowModel,
	GridRowParams,
	GridToolbar
} from '@mui/x-data-grid';

import useOffers from 'hooks/useOffers';
import { useFilter } from 'hooks/useFilter';
import { IJobOffer } from 'interfaces/IJobOffer';

const OffersList = () => {
	const location = useLocation();
	const [params] = useState(location.state?.params);
	const offers = useOffers();
	const filtered = useFilter(offers, params);
	const navigate = useNavigate();

	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID', hide: true },
		{ field: 'name', headerName: 'Company', width: 200 },
		{ field: 'education', headerName: 'Education', width: 200 },
		{
			field: 'field',
			headerName: 'Field',
			width: 150
		},
		{ field: 'city', headerName: 'City', width: 200 },
		{
			field: 'language',
			headerName: 'Language'
		},
		{
			field: 'shift',
			headerName: 'Shifts',
			width: 200
		},
		{
			field: 'salary',
			headerName: 'Salary',
			width: 100,
			type: 'number'
		}
	];

	const mapToRows = (offer: IJobOffer) => ({
		id: offer.uid,
		name: offer.FIRMA.nazev,
		education: offer.MIN_VZDELANI.nazev,
		field: offer.OBOR.nazev,
		language: offer.JAZYK?.nazev,
		shift: offer.SMENNOST.nazev,
		salary: offer.MZDA.min,
		city: offer.PRACOVISTE.obec
	});

	const onRowClick = (params: GridRowParams<GridRowModel>) => {
		navigate(`/offer/${params.id}`);
	};

	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={filtered.map((offer: IJobOffer) => mapToRows(offer))}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				onRowClick={params => onRowClick(params)}
				components={{
					Toolbar: GridToolbar
				}}
			/>
		</div>
	);
};

export default OffersList;
