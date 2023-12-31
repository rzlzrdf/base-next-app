import FormRegister from './components/FormRegister';

export default function page() {
	return (
		<main
			className="w-full min-h-screen gap-5
            flex flex-col justify-center items-center"
		>
			<h1 className='text-2xl font-light'>Register</h1>
			<FormRegister />
		</main>
	);
}
