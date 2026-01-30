import { Navbar } from '@/components/Navbar';

export default function Home() {
	return (
		<main>
			<header className='flex h-18 items-center justify-between px-24 pt-6 pb-2'>
				<div className='size-5 opacity-0'></div>
				<Navbar />
				<div className='size-5 bg-blue-500'></div>
			</header>
		</main>
	);
}
