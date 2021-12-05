import { VisibilityOff, Visibility, Edit } from '@mui/icons-material';
import {
	Alert,
	AlertTitle,
	Box,
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
import { setDoc, getDoc } from 'firebase/firestore';
import React, { useState } from 'react';

import useUser from 'hooks/useUser';
import { changeMail, changePsswd, settingsDocument } from 'utils/firebase';
import { useTranslation } from 'hooks/useTranslation';

const Settings = () => {
	const t = useTranslation();
	const user = useUser();
	const [state, setState] = React.useState({
		firstName: '',
		lastName: '',
		education: ''
	});
	const [isSuccessShown, setIsSuccessShown] = React.useState(false);
	const [isErrorShown, setIsErrorShown] = React.useState(false);

	const [isEditingFirstName, setIsEditingFirstName] = React.useState(false);
	const [isEditingLastName, setIsEditingLastName] = React.useState(false);
	const [isEditingEducation, setIsEditingEducation] = React.useState(false);

	React.useEffect(() => {
		const loadAccountInfo = async () => {
			const response = await getDoc(settingsDocument(user?.email ?? ''));

			if (response.exists()) {
				const { firstName, lastName, education } = response.data();
				setState({
					firstName: firstName ?? '',
					lastName: lastName ?? '',
					education: education ?? ''
				});
			}
		};

		loadAccountInfo();
	}, []);

	const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const value = evt.target.value;

		setState({
			...state,

			[evt.target.id]: value
		});
	};
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
	const [emptyFieldsError, setEmptyFieldsError] = useState(false);
	const [submitError, setSubmitError] = useState<string>();
	const submit = async () => {
		try {
			if (
				state.firstName === '' ||
				state.lastName === '' ||
				state.education === ''
			) {
				setEmptyFieldsError(true);
			} else {
				setEmptyFieldsError(false);
				if (user?.email) {
					await setDoc(settingsDocument(user?.email), {
						firstName: state.firstName,
						lastName: state.lastName,
						education: state.education
					});
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
			}
		} catch (err) {
			setIsErrorShown(true);
			setSubmitError(
				(err as { message?: string })?.message ?? 'Unknown error occurred'
			);
		}
	};

	console.log(state, 'state');

	return (
		<Container>
			<Stack direction="row" spacing={40}>
				<Stack spacing={2}>
					<Typography variant="h6">First name</Typography>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<TextField
							sx={{ m: 1, width: '50ch', marginRight: '20px' }}
							id="firstName"
							label="First name"
							variant="outlined"
							disabled={!isEditingFirstName}
							value={state.firstName}
							onChange={handleChange}
						/>
						<Edit color="primary" onClick={() => setIsEditingFirstName(true)} />
					</Box>
					<Typography variant="h6">Last name</Typography>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<TextField
							sx={{ m: 1, width: '50ch', marginRight: '20px' }}
							id="lastName"
							label="Last name"
							variant="outlined"
							disabled={!isEditingLastName}
							value={state.lastName}
							onChange={handleChange}
						/>
						<Edit color="primary" onClick={() => setIsEditingLastName(true)} />
					</Box>
					<Typography variant="h6">Education</Typography>
					<Box
						sx={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}
					>
						<TextField
							sx={{ m: 1, width: '50ch', marginRight: '20px' }}
							id="education"
							label="Education"
							variant="outlined"
							disabled={!isEditingEducation}
							value={state.education}
							onChange={handleChange}
						/>
						<Edit color="primary" onClick={() => setIsEditingEducation(true)} />
					</Box>
					<Typography variant="h6">New mail</Typography>
					<TextField
						sx={{ m: 1, width: '50ch', marginBottom: '30px' }}
						id="mail"
						label="New mail"
						variant="outlined"
						error={mailValid}
						helperText={mailValid ? 'Not a valid email address' : ' '}
						value={mail}
						onChange={handleChangeMail}
					/>
					<Typography variant="h6">New password</Typography>
					<FormControl
						sx={{ m: 1, width: '50ch' }}
						variant="outlined"
						error={passwordsDiffer}
					>
						<InputLabel htmlFor="outlined-adornment-password">
							{passwordsDiffer ? 'Passwords differ!' : 'New password'}
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
							label="New password"
						/>
					</FormControl>
					<FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
						<InputLabel htmlFor="outlined-adornment-password-repeated">
							{passwordsDiffer ? 'Passwords differ!' : 'Repeat password'}
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
							label="Repeat password"
						/>
					</FormControl>
				</Stack>
			</Stack>
			{submitError && (
				<Typography variant="subtitle2" align="left" color="error" paragraph>
					{submitError}
				</Typography>
			)}
			{emptyFieldsError && (
				<Alert severity="error" sx={{ marginTop: '20px' }}>
					<AlertTitle>Error</AlertTitle>
					First name, last name and education can not be empty
				</Alert>
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
				Submit
			</Button>
		</Container>
	);
};

export default Settings;
