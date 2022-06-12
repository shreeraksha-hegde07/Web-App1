import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
export default function Login() {
	const history = useNavigate();
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid
				container
				spacing={2}
				direction="column"
				justifyContent="flex-end"
				alignItems="center"
			>
				<Grid>
					<Card sx={{ minWidth: 450, marginTop: 20 }}>
						<CardContent>
							<Typography
								variant="h4"
								style={{ textTransform: 'uppercase' }}
								align="center"
							>
								Metasoft
							</Typography>

							<Formik
								initialValues={{
									username: '',
									password: '',
								}}
								validate={(values) => {
									const errors = {};
									if (!values.username) {
										errors.username = 'Required';
									} else if (!values.password) {
										errors.password = 'Required';
									}
									return errors;
								}}
								onSubmit={(values, { setSubmitting }) => {
									setTimeout(() => {
										sessionStorage.setItem('token', values.username);
										history('dashboard');
										setSubmitting(false);
									}, 400);
								}}
							>
								{({
									values,
									errors,
									touched,
									handleChange,
									handleBlur,
									handleSubmit,
									isSubmitting,
								}) => (
									<Box
										component="form"
										noValidate
										onSubmit={handleSubmit}
										sx={{ mt: 3 }}
									>
										<Grid style={{ marginTop: 30 }}>
											<TextField
												id="username"
												label="Username"
												variant="outlined"
												fullWidth
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.email}
												error={
													errors.username && touched.username && errors.username
												}
												helperText={
													errors.username && touched.username && errors.username
												}
											/>
										</Grid>

										<Grid style={{ marginTop: 20 }}>
											<TextField
												id="password"
												label="Password"
												variant="outlined"
												fullWidth
												type="password"
												error={
													errors.password && touched.password && errors.password
												}
												helperText={
													errors.password && touched.password && errors.password
												}
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.password}
											/>
										</Grid>
										<Grid style={{ marginTop: 10 }}>
											<Link href="#">Forgotpassword ?</Link>
										</Grid>

										<Grid style={{ marginTop: 20 }}>
											<Button
												type="submit"
												variant="contained"
												fullWidth
												disabled={isSubmitting}
											>
												Login
											</Button>

											<Grid style={{ marginTop: 10 }}>
												Create account <Link href="signup">Signup </Link>
											</Grid>
										</Grid>
									</Box>
								)}
							</Formik>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
}
