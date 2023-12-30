'use client';
import { useAuth } from '@/utils/AuthProvider';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Profie: React.FC = () => {
	const { dataUser, setDataUser } = useAuth();
	const navigateTo = useRouter();
	const handlerLogout = () => {
		setDataUser({});
		navigateTo.push('/login');
	};

	console.log(dataUser);

	return (
		<div className="w-1/2 mt-5 gap-5">
			{dataUser ? (
				<div className="flex flex-col items-center gap-5">
					<h1>Welcome, {dataUser && dataUser.email}</h1>
					<Button
						className="w-fit px-5 bg-red-500 text-white"
						variant="flat"
						onClick={handlerLogout}
					>
						Logout
					</Button>
				</div>
			) : (
				<Link href="/login" className="w-full block">
					<Button className="w-full">Login</Button>
				</Link>
			)}
		</div>
	);
};

export default Profie;
