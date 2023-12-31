'use client';

import { UserModelInterface } from '@/types/user';
import { Button, Checkbox, Input } from '@nextui-org/react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export const RegisterInitData: UserModelInterface = {
	email: '',
	name: '',
	password: '',
	repassword: '',
	agree: false,
};

export const validationFormScheme = Yup.object().shape({
	email: Yup.string()
		.matches(
			// /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			'Please insert valid email'
		)
		.email('Please insert valid email')
		.required('Invalid email, Required!'),
	name: Yup.string().required('Required!'),
	password: Yup.string().required('Required!'),
	repassword: Yup.string().required('Required!'),
});

const FormRegister: React.FC = () => {
	const [visiblePass, setVisiblePass] = useState<boolean>(false);
	const [visibleRePass, setVisibleRePass] = useState<boolean>(false);

	const handlerRegister = (values: UserModelInterface) => {
		if (values.password === values.repassword && values.agree) {
			console.log(values);
		}
	};

	return (
		<div className="w-1/3 min-w-[150px] bg-white min-h-[400px] p-8 rounded-3xl">
			<Formik
				initialValues={RegisterInitData}
				validationSchema={validationFormScheme}
				onSubmit={values => handlerRegister(values)}
			>
				{({
					values,
					handleChange,
					handleSubmit,
					touched,
					errors,
					isValid,
					dirty,
				}) => (
					<Form onSubmit={handleSubmit}>
						<div className="text-black min-h-[125px]">
							<label htmlFor="email">
								Email{' '}
								<span className="text-red-500 pl-1">*</span>
							</label>
							<Input
								name="email"
								value={values.email}
								required
								type="email"
								placeholder="example@mail.co"
								className="my-2"
								onChange={handleChange}
								
							/>
						</div>
						<div className="text-black min-h-[125px]">
							<label htmlFor="name">
								Name{' '}
								<span className="text-red-500 pl-1">*</span>
							</label>
							<Input
								name="name"
								value={values.name}
								required
								type="text"
								placeholder="What's your name?"
								className="my-2"
								onChange={handleChange}
							/>
							<span className="text-red-500 text-xs font-semibold">
								{touched.name && errors.name}
							</span>
						</div>
						<div className="text-black min-h-[125px]">
							<label htmlFor="password">
								Password{' '}
								<span className="text-red-500 pl-1">*</span>
							</label>
							<div className="relative">
								<Input
									name="password"
									value={values.password}
									required
									type={!visiblePass ? 'password' : 'text'}
									placeholder="********"
									className="my-2"
									onChange={handleChange}
								/>
								{!visiblePass ? (
									<Icon
										icon="iconoir:eye-solid"
										className="absolute right-3 top-1/2 -translate-y-1/2
                                        text-xl cursor-pointer"
										onClick={() => setVisiblePass(true)}
									/>
								) : (
									<Icon
										icon="lets-icons:view-hide-fill"
										className="absolute right-3 top-1/2 -translate-y-1/2
                                        text-xl cursor-pointer"
										onClick={() => setVisiblePass(false)}
									/>
								)}
								<span className="text-red-500 text-xs font-semibold">
									{touched.password && errors.password}
								</span>
							</div>
						</div>
						<div className="text-black min-h-[125px]">
							<label htmlFor="repassword">
								Confirm Password{' '}
								<span className="text-red-500 pl-1">*</span>
							</label>
							<div className="relative">
								<Input
									name="repassword"
									value={values.repassword}
									required
									type={!visibleRePass ? 'password' : 'text'}
									placeholder="********"
									className="my-2"
									onChange={handleChange}
									
								/>
								{!visibleRePass ? (
									<Icon
										icon="iconoir:eye-solid"
										className="absolute right-3 top-1/2 -translate-y-1/2
                                        text-xl cursor-pointer"
										onClick={() => setVisibleRePass(true)}
									/>
								) : (
									<Icon
										icon="lets-icons:view-hide-fill"
										className="absolute right-3 top-1/2 -translate-y-1/2
                                        text-xl cursor-pointer"
										onClick={() => setVisibleRePass(false)}
									/>
								)}
							</div>
							{values.password !== values.repassword && (
								<span className="text-red-500 text-xs">
									Your confirm password difference with
									passsword!
								</span>
							)}
						</div>
						<div className="w-full flex justify-between mt-5">
							<label
								htmlFor="agree"
								className="text-black text-xs"
							>
								<Checkbox
									name="agree"
									checked={values.agree}
									onChange={handleChange}
								/>{' '}
								I agree with terms{' '}
								<span className="text-red-500 text-base pl-1">
									*
								</span>
							</label>
							<Button
								type="submit"
								// disabled={!isValid || !dirty}
								className="bg-violet-700 text-white"
							>
								Register
							</Button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FormRegister;
