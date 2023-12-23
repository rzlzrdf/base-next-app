import FormLogin from './components/FormLogin';

export default function page() {
	return (
		<main className="min-h-screen w-full flex flex-col justify-center items-center">
			<div className="w-1/4 bg-white text-black p-5">
				<h1>Login</h1>
				<FormLogin />
			</div>
		</main>
	);
}
