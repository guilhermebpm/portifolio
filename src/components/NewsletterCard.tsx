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
		<div className="w-full rounded-2xl border border-border bg-background p-6">
			{/* Header */}
			<div className="flex items-center gap-3 mb-4">
				<svg
					className="w-6 h-6 text-muted"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={1.5}
						d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
					/>
				</svg>
				<h3 className="text-sm font-semibold text-foreground">Stay up to date</h3>
			</div>

			{/* Description */}
			<p className="text-sm text-muted-foreground leading-6 mb-6">
				Get notified when I publish something new, and unsubscribe at any time.
			</p>

			{/* Form */}
			<form onSubmit={handleSubmit} className='flex gap-3'>
				<input
					type='email'
					placeholder='Email address'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
					required
				/>
				<button
					type="submit"
					className="rounded-lg bg-zinc-800 dark:bg-zinc-700 px-4 py-2.5 text-sm font-medium text-white dark:text-zinc-100 hover:bg-zinc-700 dark:hover:bg-zinc-600 transition-colors"
				>
					Join
				</button>
			</form>
		</div>
	);
}
