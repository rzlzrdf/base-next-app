import { Button, Card } from '@nextui-org/react';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="min-h-screen w-full flex flex-col items-center justify-center">
			<h1>Landing Page</h1>
			<div className="w-1/2 mt-5 grid lg:grid-cols-2 gap-5">
				<Link href="/login" className="w-full block">
					<Button className="w-full">Login</Button>
				</Link>
				<Link href="/register" className="w-full block">
					<Button className="w-full">Register</Button>
				</Link>
			</div>
		</main>
	);
}
