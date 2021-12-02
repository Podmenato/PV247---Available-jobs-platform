import { VisibilityOff, Visibility } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import {
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

const Settings = () => {
	const [state, setState] = React.useState({
		firstName: '',
		lastName: '',
		education: '',
		mail: ''
	});
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
	const test = () => {
		console.log(
			state.firstName,
			state.lastName,
			state.education,
			mail,
			password
		);
	};
	// changing
	const [showEditing, setShowEditing] = useState(false);
	const [insertedOldPassword, setInsertedOldPassword] = useState<string>();
	const [oldPasswordTouched, setOldPasswordTouched] = useState(false);
	const handleChangeOldPassword = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setInsertedOldPassword(event.target.value);
		setOldPasswordTouched(true);
		setShowFormular(true);
	};
	const [showFormular, setShowFormular] = useState(false);
	const passwordSame = insertedOldPassword === password || !oldPasswordTouched;
	const [newPassword, setNewPassword] = useState<string>();
	const [newPasswordRepeated, setNewPasswordRepeated] = useState<string>();
	const [newPasswordTouched, setNewPasswordTouched] = useState(false);
	const [newPasswordRepatedTouched, setNewPasswordRepeatedTouched] =
		useState(false);
	const newPasswordsDiffer =
		newPasswordTouched &&
		newPasswordRepatedTouched &&
		newPassword !== newPasswordRepeated;
	const [showInsertedOldPassword, setShowInsertedOldPassword] = useState(false);
	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showNewPassword_2, setShowNewPassword_2] = useState(false);
	const handleChangeNewPassword = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setNewPassword(event.target.value);
		setNewPasswordTouched(true);
	};
	const handleChangeNewPasswordRepeated = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setNewPasswordRepeated(event.target.value);
		setNewPasswordRepeatedTouched(true);
	};
	const handleClickShowInsertedOldPassword = () => {
		setShowInsertedOldPassword(!showPassword);
	};
	const handleMouseDownInsertedOldPassword = (event: {
		preventDefault: () => void;
	}) => {
		event.preventDefault();
	};
	const handleClickShowNewPassword = () => {
		setShowNewPassword(!showPassword);
	};
	const handleMouseDownNewPassword = (event: {
		preventDefault: () => void;
	}) => {
		event.preventDefault();
	};
	const handleClickShowNewPassword_2 = () => {
		setShowNewPassword_2(!showPassword_2);
	};
	const handleMouseDownNewPassword_2 = (event: {
		preventDefault: () => void;
	}) => {
		event.preventDefault();
	};
	return (
		<Container>
			<Stack direction="row" spacing={40}>
				<Stack spacing={2}>
					<Typography variant="h6">First name</Typography>
					<TextField
						sx={{ m: 1, width: '50ch' }}
						id="firstName"
						label="First name"
						variant="outlined"
						value={state.firstName}
						onChange={handleChange}
					/>
					<Typography variant="h6">Last name</Typography>
					<TextField
						sx={{ m: 1, width: '50ch' }}
						id="lastName"
						label="Last name"
						variant="outlined"
						value={state.lastName}
						onChange={handleChange}
					/>
					<Typography variant="h6">Education</Typography>
					<TextField
						sx={{ m: 1, width: '50ch' }}
						id="education"
						label="Education"
						variant="outlined"
						value={state.education}
						onChange={handleChange}
					/>
					<Typography variant="h6">Mail</Typography>
					<TextField
						sx={{ m: 1, width: '50ch' }}
						required
						id="mail"
						label="Mail"
						variant="outlined"
						error={mailValid}
						helperText={mailValid ? 'Not a valid email address' : ' '}
						value={mail}
						onChange={handleChangeMail}
					/>
					<Typography variant="h6">Password</Typography>
					<FormControl
						sx={{ m: 1, width: '50ch' }}
						variant="outlined"
						error={passwordsDiffer}
					>
						<InputLabel htmlFor="outlined-adornment-password">
							{passwordsDiffer ? 'Passwords differ!' : 'Password'}
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
							label="Password"
						/>
					</FormControl>
					<FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
						<InputLabel htmlFor="outlined-adornment-password">
							{passwordsDiffer ? 'Passwords differ!' : 'Password'}
						</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
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
							label="Repeat Password"
						/>
					</FormControl>
				</Stack>
				<Stack spacing={2}>
					<IconButton onClick={() => setShowEditing(!showEditing)}>
						<EditIcon />
					</IconButton>
					{showEditing && (
						<Typography variant="h6">Type old password</Typography>
					)}
					{showEditing && (
						<FormControl
							sx={{ m: 1, width: '50ch' }}
							variant="outlined"
							error={!passwordSame}
						>
							<InputLabel htmlFor="outlined-adornment-password">
								{!passwordSame ? 'Wrong password' : ''}
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={showInsertedOldPassword ? 'text' : 'password'}
								value={insertedOldPassword}
								error={!passwordSame}
								onChange={handleChangeOldPassword}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowInsertedOldPassword}
											onMouseDown={handleMouseDownInsertedOldPassword}
											edge="end"
										>
											{showInsertedOldPassword ? (
												<VisibilityOff />
											) : (
												<Visibility />
											)}
										</IconButton>
									</InputAdornment>
								}
								label="Password"
							/>
						</FormControl>
					)}
					{showEditing && passwordSame && showFormular && (
						<Typography variant="h6">New password</Typography>
					)}
					{showEditing && passwordSame && showFormular && (
						<FormControl
							sx={{ m: 1, width: '50ch' }}
							variant="outlined"
							error={newPasswordsDiffer}
						>
							<InputLabel htmlFor="outlined-adornment-password">
								{newPasswordsDiffer ? 'Passwords differ!' : 'Password'}
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={showNewPassword ? 'text' : 'password'}
								value={newPassword}
								error={newPasswordsDiffer}
								onChange={handleChangeNewPassword}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowNewPassword}
											onMouseDown={handleMouseDownNewPassword}
											edge="end"
										>
											{showNewPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Password"
							/>
						</FormControl>
					)}
					{showEditing && passwordSame && showFormular && (
						<FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">
								{newPasswordsDiffer ? 'Passwords differ!' : 'Password'}
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={showNewPassword_2 ? 'text' : 'password'}
								value={newPasswordRepeated}
								error={newPasswordsDiffer}
								onChange={handleChangeNewPasswordRepeated}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowNewPassword_2}
											onMouseDown={handleMouseDownNewPassword_2}
											edge="end"
										>
											{showNewPassword_2 ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Repeat Password"
							/>
						</FormControl>
					)}
				</Stack>
			</Stack>
			<Button onClick={test}>Submit</Button>
		</Container>
	);
};

export default Settings;