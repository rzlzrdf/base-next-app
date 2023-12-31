'use client';
import { Button } from '@nextui-org/react';
import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const Profie: React.FC = () => {
	const { status } = useSession();

	return (
		<>
			{status === 'loading' && (
				<Icon
					icon="icon-park-outline:loading-three"
					className="animate-spin text-3xl mt-10"
				/>
			)}
			{status === 'authenticated' && (
				<Link href="/dashboard">
					<Button
						variant="bordered"
						className="mt-10 bg-transparent text-white"
					>
						Dashboard <Icon icon="material-symbols:dashboard" />
					</Button>
				</Link>
			)}
			{status === 'unauthenticated' && (
				<div
					className="w-full lg:w-1/2 gap-5
				 flex justify-center items-center mt-10"
				>
					<Button
						onClick={() => signIn()}
						variant="shadow"
						className="w-1/2"
					>
						Login{' '}
						<Icon
							icon="material-symbols:login"
							className="text-xl"
						/>
					</Button>
					<div className='text-center'>||</div>
					<Link
						href="/register"
						className="w-1/2 block bg-transparent text-white"
					>
						<Button
							variant="ghost"
							className="w-full text-white hover:text-black"
						>
							Register{' '}
							<Icon icon="typcn:user-add" className="text-xl" />
						</Button>
					</Link>
				</div>
			)}
		</>
	);
};

export default Profie;
