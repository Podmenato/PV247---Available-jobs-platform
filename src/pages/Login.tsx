import { Button, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { EPaths } from 'enums/EPaths';

import useField from '../hooks/useField';
import { useTranslation } from '../hooks/useTranslation';
import { signIn, signUp } from '../utils/firebase';

const Login: FC = () => {
	const t = useTranslation();
	const navigate = useNavigate();

	const [isSignUp, setSignUp] = useState(false);
	const [submitError, setSubmitError] = useState<string>();

	const [email, usernameProps] = useField('email', true);
	const [password, passwordProps] = useField('password', true);

	return (
		<Paper
			component="form"
			onSubmit={async (e: FormEvent) => {
				e.preventDefault();
				try {
					isSignUp
						? await signUp(email, password)
						: await signIn(email, password);
					navigate(EPaths.HOME);
				} catch (err) {
					setSubmitError(
						(err as { message?: string })?.message ?? t('unknown_error')
					);
				}
			}}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '40vw',
				p: 4,
				gap: 2
			}}
		>
			<Typography variant="h4" component="h2" textAlign="center" mb={3}>
				{t('login')}
			</Typography>
			<TextField label={t('email')} {...usernameProps} type="email" />
			<TextField label={t('password')} {...passwordProps} type="password" />
			<Box
				sx={{
					display: 'flex',
					gap: 2,
					alignItems: 'center',
					alignSelf: 'flex-end',
					mt: 2
				}}
			>
				{submitError && (
					<Typography
						variant="caption"
						textAlign="right"
						sx={{ color: 'error.main' }}
					>
						{submitError}
					</Typography>
				)}
				<Button
					type="submit"
					variant="outlined"
					onClick={() => setSignUp(true)}
				>
					{t('sign_up')}
				</Button>
				<Button type="submit" variant="contained">
					{t('sign_in')}
				</Button>
			</Box>
		</Paper>
	);
};

export default Login;
