'use client';

import Link from 'next/link';

export function Footer() {
	return (
		<footer className='w-full border-zinc-100 border-t bg-white'>
			<div className='mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-36 md:py-12'>
				{/* Navigation Links */}
				<nav className='flex flex-wrap justify-center gap-6'>
					<Link href='/' className='font-medium text-sm text-zinc-600 transition-colors hover:text-zinc-900'>
						Home
					</Link>
					<Link href='/about' className='font-medium text-sm text-zinc-600 transition-colors hover:text-zinc-900'>
						About
					</Link>
					<Link href='/projects' className='font-medium text-sm text-zinc-600 transition-colors hover:text-zinc-900'>
						Projects
					</Link>
					<Link href='/users' className='font-medium text-sm text-zinc-600 transition-colors hover:text-zinc-900'>
						Uses
					</Link>
				</nav>

				{/* Copyright */}
				<p className='text-sm text-zinc-400'>© 2024 John Doe. All rights reserved.</p>
			</div>
		</footer>
	);
}

Footer.displayName = 'Footer';
