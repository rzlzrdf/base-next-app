'use client';
import { useAuth } from '@/utils/AuthProvider';
import { Button, Input } from '@nextui-org/react';
import { Form, Formik } from 'formik';
import React from 'react';

export const initValuesLoginForm = { email: '', password: '' };

const FormLogin = () => {
	const { handlerLogin } = useAuth();
	return (
		<Formik
			initialValues={initValuesLoginForm}
			onSubmit={value => handlerLogin(value)}
		>
			{({ values, handleChange, handleSubmit }) => (
				<Form onSubmit={handleSubmit}>
					<div className="mt-3">
						<Input
							name="email"
							value={values.email}
							onChange={handleChange}
							type="email"
							variant="faded"
							label="Email"
						/>
					</div>
					<div className="mt-3">
						<Input
							name="password"
							value={values.password}
							onChange={handleChange}
							type="password"
							variant="faded"
							label="Password"
						/>
					</div>
					<div className="mt-3">
						<Button type="submit" className="block w-full">
							Login
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default FormLogin;
