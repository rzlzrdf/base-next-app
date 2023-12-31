import Profie from "./components/Profie";

export default function Home() {
	return (
		<main className="min-h-screen w-full flex flex-col items-center justify-center">
			<p className="text-5xl">
				Base App{' '}
				<span
					className="bg-gradient-to-br from-violet-700 to-gray-950
					bg-clip-text text-transparent font-bold"
				>
					V.1.0
				</span>
			</p>
			<p
				className="text-xs mt-6 bg-violet-300
			 	px-3 py-1 text-indigo-800 rounded-full"
			>
				created by @Rizal_Lazuardi
			</p>
			<Profie />
		</main>
	);
}
