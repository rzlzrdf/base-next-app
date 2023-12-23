'use client';
import { Button, Input } from '@nextui-org/react';
import { Form, Formik } from 'formik';
import React from 'react';

export const initValuesLoginForm = { email: '', password: '' };

const FormLogin = () => {
	return (
		<Formik
			initialValues={initValuesLoginForm}
			onSubmit={value => console.log(value)}
		>
			<Form>
				<div className="mt-3">
					<Input
						type="email"
						variant="faded"
						label="Email"
					/>
				</div>
				<div className="mt-3">
					<Input
						type="password"
						variant="faded"
						label="Password"
					/>
				</div>
				<div className="mt-3 border-b-2 pb-3">
					<Button type="submit" className="block w-full">
						Login 
					</Button>
				</div>
			</Form>
		</Formik>
	);
};

export default FormLogin;
