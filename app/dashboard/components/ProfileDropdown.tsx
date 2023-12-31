'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	User,
} from '@nextui-org/react';

const ProfileDropdown: React.FC = () => {
	const { data: session, status } = useSession();
	const navigateTo = useRouter();
	console.log(session, status);

	useEffect(() => {
		if (status === 'unauthenticated') {
			signIn();
		}
	}, [status]);

	return (
			<Dropdown placement="bottom-start" className='bg-transparent'>
				<DropdownTrigger>
					<User
						as="button"
						avatarProps={{
							isBordered: false,
							src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
						}}
						className="transition-transform"
						description={session?.user?.email}
						name={session?.user?.name}
					/>
				</DropdownTrigger>
				<DropdownMenu
					aria-label="User Actions"
					variant="bordered"
					className=" text-white"
				>
					<DropdownItem key="profile" className="h-14 gap-2">
						<p className="font-bold">Signed in as</p>
						<p className="font-bold">{session?.user?.email}</p>
					</DropdownItem>
					<DropdownItem key="settings">My Settings</DropdownItem>
					<DropdownItem key="team_settings">
						Team Settings
					</DropdownItem>
					<DropdownItem key="analytics">Analytics</DropdownItem>
					<DropdownItem key="system">System</DropdownItem>
					<DropdownItem key="configurations">
						Configurations
					</DropdownItem>
					<DropdownItem key="help_and_feedback">
						Help & Feedback
					</DropdownItem>
					<DropdownItem onClick={() => signOut()}>
						Logout
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
	);
};

export default ProfileDropdown;
