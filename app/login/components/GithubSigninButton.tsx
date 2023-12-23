'use client';
import { Button } from '@nextui-org/react';
import { signIn } from 'next-auth/react';
import React from 'react';

const GithubSigninButton = () => {
	return (
		<Button
			onClick={() =>
				signIn('github', {
					callbackUrl: `${window.location.origin}/dashboard`,
				})
			}
			className="mt-3 w-full bg-black text-white"
		>
			Login With Github
		</Button>
	);
};

export default GithubSigninButton;
