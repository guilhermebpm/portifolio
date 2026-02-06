'use client';

import { useState } from 'react';

export function NewsletterCard() {
	const [email, setEmail] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle newsletter signup
		console.log('Newsletter signup:', email);
		setEmail('');
	};

	return (
		<div className='w-full rounded-2xl border border-zinc-100 bg-white p-6'>
			{/* Header */}
			<div className='mb-4 flex items-center gap-3'>
				<svg className='h-6 w-6 text-zinc-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={1.5}
						d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
					/>
				</svg>
				<h3 className='font-semibold text-sm text-zinc-900'>Stay up to date</h3>
			</div>

			{/* Description */}
			<p className='mb-6 text-sm text-zinc-600 leading-6'>
				Get notified when I publish something new, and unsubscribe at any time.
			</p>

			{/* Form */}
			<form onSubmit={handleSubmit} className='flex gap-3'>
				<input
					type='email'
					placeholder='Email address'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className='flex-1 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-500'
					required
				/>
				<button
					type='submit'
					className='rounded-lg bg-zinc-800 px-4 py-2.5 font-medium text-sm text-white transition-colors hover:bg-zinc-700'
				>
					Join
				</button>
			</form>
		</div>
	);
}
