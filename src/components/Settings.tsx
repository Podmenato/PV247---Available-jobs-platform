import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
	Alert,
	Button,
	Container,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Stack,
	TextField,
	Typography
} from '@mui/material';
import React, { useState } from 'react';

import useUser from 'hooks/useUser';
import { changeMail, changePsswd } from 'utils/firebase';
import { useTranslation } from 'hooks/useTranslation';

const Settings = () => {
	const t = useTranslation();
	const user = useUser();
	const [isSuccessShown, setIsSuccessShown] = React.useState(false);
	const [isErrorShown, setIsErrorShown] = React.useState(false);
	const [password, setPassword] = useState<string>();
	const [passwordRepeated, setPasswordRepeated] = useState<string>();
	const [passwordTouched, setPasswordTouched] = useState(false);
	const [passwordRepatedTouched, setPasswordRepeatedTouched] = useState(false);
	const [mail, setMail] = useState<string>();
	const [mailTouched, setMailTouched] = useState(false);
	const pattern = new RegExp(
		/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
	);
	const handleChangeMail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMail(event.target.value);
		setMailTouched(true);
	};
	const mailValid = mailTouched && !pattern.test(mail as string);

	const [showPassword, setShowPassword] = useState(false);
	const [showPassword_2, setShowPassword_2] = useState(false);
	const passwordsDiffer =
		passwordTouched && passwordRepatedTouched && password !== passwordRepeated;
	const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
		setPasswordTouched(true);
	};
	const handleChangePasswordRepeated = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setPasswordRepeated(event.target.value);
		setPasswordRepeatedTouched(true);
	};
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};
	const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
		event.preventDefault();
	};
	const handleClickShowPassword_2 = () => {
		setShowPassword_2(!showPassword_2);
	};
	const handleMouseDownPassword_2 = (event: { preventDefault: () => void }) => {
		event.preventDefault();
	};

	//submitting
	const [submitError, setSubmitError] = useState<string>();
	const submit = async () => {
		try {
			if (user?.email) {
				if (!mailValid) {
					if (mail) {
						changeMail(mail);
					}
				}
				if (!passwordsDiffer && password) {
					changePsswd(password);
				}
			}
			setIsSuccessShown(true);
		} catch (err) {
			setIsErrorShown(true);
			setSubmitError(
				(err as { message?: string })?.message ?? 'Unknown error occurred'
			);
		}
	};

	return (
		<Container>
			<Stack direction="row" spacing={40}>
				<Stack spacing={2}>
					<Typography variant="h6">{t('newMail')}</Typography>
					<TextField
						sx={{ m: 1, width: '50ch', marginBottom: '30px' }}
						id="mail"
						label={t('newMail')}
						variant="outlined"
						error={mailValid}
						helperText={mailValid ? 'Not a valid email address' : ' '}
						value={mail}
						onChange={handleChangeMail}
					/>
					<Typography variant="h6">{t('newPassword')}</Typography>
					<FormControl
						sx={{ m: 1, width: '50ch' }}
						variant="outlined"
						error={passwordsDiffer}
					>
						<InputLabel htmlFor="outlined-adornment-password">
							{passwordsDiffer ? t('passwordsDiffer') : t('newPassword')}
						</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
							type={showPassword ? 'text' : 'password'}
							value={password}
							error={passwordsDiffer}
							onChange={handleChangePassword}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label={t('newPassword')}
						/>
					</FormControl>
					<FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
						<InputLabel htmlFor="outlined-adornment-password-repeated">
							{passwordsDiffer ? t('passwordsDiffer') : t('repeatPassword')}
						</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password-repeated"
							type={showPassword_2 ? 'text' : 'password'}
							value={passwordRepeated}
							error={passwordsDiffer}
							onChange={handleChangePasswordRepeated}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword_2}
										onMouseDown={handleMouseDownPassword_2}
										edge="end"
									>
										{showPassword_2 ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label={t('repeatPassword')}
						/>
					</FormControl>
				</Stack>
			</Stack>
			{submitError && (
				<Typography variant="subtitle2" align="left" color="error" paragraph>
					{submitError}
				</Typography>
			)}
			{isSuccessShown && (
				<Alert severity="success" sx={{ marginTop: '20px' }}>
					{t('profile_updated_success')}
				</Alert>
			)}
			{isErrorShown && (
				<Alert severity="error" sx={{ marginTop: '20px' }}>
					{t('profile_updated_error')}
				</Alert>
			)}
			<Button variant="contained" onClick={submit} sx={{ marginTop: '20px' }}>
				{t('submit')}
			</Button>
		</Container>
	);
};

export default Settings;
