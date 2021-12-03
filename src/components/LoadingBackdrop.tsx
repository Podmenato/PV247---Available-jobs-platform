import React, { FC } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

type Props = {
	loading: boolean;
};

const LoadingBackdrop: FC<Props> = ({ loading }) => (
	<Backdrop sx={{ color: '#fff', zIndex: 999 }} open={loading}>
		<CircularProgress color="inherit" />
	</Backdrop>
);

export default LoadingBackdrop;
