'use client';

import Link from 'next/link';

export function Footer() {
	return (
		<footer className="w-full border-t border-border">
			<div className="mx-auto w-full max-w-7xl flex flex-col items-center gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-36 md:py-12">
				{/* Navigation Links */}
				<nav className="flex flex-wrap justify-center gap-6">
					<Link
						href="/"
						className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
					>
						Home
					</Link>
					<Link
						href="/about"
						className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
					>
						About
					</Link>
					<Link
						href="/projects"
						className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
					>
						Projects
					</Link>
					<Link
						href="/users"
						className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
					>
						Uses
					</Link>
				</nav>

				{/* Copyright */}
				<p className="text-sm text-muted">
					© 2024 John Doe. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

Footer.displayName = 'Footer';