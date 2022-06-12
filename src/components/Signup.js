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
export default function Signup() {
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
				<Grid xs={10} sm={5}>
					<Card sx={{ marginTop: 20 }}>
						<CardContent>
							<Typography
								variant="h4"
								style={{ textTransform: 'uppercase' }}
								align="center"
							>
								Metasoft
							</Typography>
							<Typography component="h1" variant="h5">
								Sign up
							</Typography>
							<Formik
								initialValues={{
									username: '',
									firstName: '',
									phone: '',
									lastName: '',
									email: '',
									password: '',
								}}
								validate={(values) => {
									const errors = {};
									if (!values.firstName) {
										errors.firstName = 'Required';
									} else if (!values.lastName) {
										errors.lastName = 'Required';
									} else if (!values.username) {
										errors.username = 'Required';
									} else if (!values.phone) {
										errors.phone = 'Required';
									} else if (!values.email) {
										errors.email = 'Required';
									} else if (
										!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
											values.email
										)
									) {
										errors.email = 'Invalid email address';
									} else if (!values.password) {
										errors.password = 'Required';
									} else if (values.password.length < 8) {
										errors.password =
											'password minimum 8 characters is required ';
									} else if (!/^\+?[1-9][0-9]{7,14}$/i.test(values.phone)) {
										errors.phone = 'Invalid phone number';
									}
									return errors;
								}}
								onSubmit={(values, { setSubmitting }) => {
									setTimeout(() => {
										alert(JSON.stringify(values, null, 2));
										sessionStorage.setItem('token', values.username);
										history('/dashboard');
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
									/* and other goodies */
								}) => (
									<Box
										component="form"
										noValidate
										onSubmit={handleSubmit}
										sx={{ mt: 3 }}
									>
										<Grid container spacing={2}>
											<Grid item xs={12} sm={6}>
												<TextField
													autoComplete="given-name"
													name="firstName"
													required
													fullWidth
													id="firstName"
													label="First Name"
													autoFocus
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.firstName}
													error={
														errors.firstName &&
														touched.firstName &&
														errors.firstName
													}
													helperText={
														errors.firstName &&
														touched.firstName &&
														errors.firstName
													}
												/>
											</Grid>
											<Grid item xs={12} sm={6}>
												<TextField
													required
													fullWidth
													id="lastName"
													label="Last Name"
													name="lastName"
													autoComplete="family-name"
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.lastName}
													error={
														errors.lastName &&
														touched.lastName &&
														errors.lastName
													}
													helperText={
														errors.lastName &&
														touched.lastName &&
														errors.lastName
													}
												/>
											</Grid>
											<Grid item xs={12}>
												<TextField
													required
													fullWidth
													id="username"
													label="Username"
													name="username"
													autoComplete="username"
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.username}
													error={
														errors.username &&
														touched.username &&
														errors.username
													}
													helperText={
														errors.username &&
														touched.username &&
														errors.username
													}
												/>
											</Grid>

											<Grid item xs={12}>
												<TextField
													required
													fullWidth
													id="phone"
													label="Phone"
													name="phone"
													autoComplete="phone"
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.phone}
													error={errors.phone && touched.phone && errors.phone}
													helperText={
														errors.phone && touched.phone && errors.phone
													}
												/>
											</Grid>
											<Grid item xs={12} sm={6}>
												<TextField
													required
													fullWidth
													id="email"
													label="Email Address"
													name="email"
													autoComplete="email"
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.email}
													error={errors.email && touched.email && errors.email}
													helperText={
														errors.email && touched.email && errors.email
													}
												/>
											</Grid>
											<Grid item xs={12} sm={6}>
												<TextField
													required
													fullWidth
													name="password"
													label="Password"
													type="password"
													id="password"
													autoComplete="new-password"
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.password}
													error={
														errors.password &&
														touched.password &&
														errors.password
													}
													helperText={
														errors.password &&
														touched.password &&
														errors.password
													}
												/>
											</Grid>
										</Grid>
										<Button
											type="submit"
											fullWidth
											style={{ float: 'right' }}
											variant="contained"
											sx={{ mt: 3, mb: 2 }}
											disabled={isSubmitting}
										>
											Sign Up
										</Button>
										<Grid container justifyContent="flex-end">
											<Grid item>
												<Link href="/" variant="body2">
													Already have an account? Login
												</Link>
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
