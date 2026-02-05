'use client';

import Link from 'next/link';
import type React from 'react';

type FooterProps = {
	name?: string;
};

const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/users', label: 'Uses' },
];

export const Footer: React.FC<FooterProps> = ({ name = 'John Doe' }) => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='flex items-center justify-between px-36 pt-10 pb-16'>
			<nav className='flex gap-6'>
				{navLinks.map((link) => (
					<Link key={link.href} href={link.href} className='text-base transition-colors hover:text-zinc-800'>
						{link.label}
					</Link>
				))}
			</nav>
			<p className='text-sm text-zinc-400'>
				© {currentYear} {name}. All rights reserved.
			</p>
		</footer>
	);
};

Footer.displayName = 'Footer';
