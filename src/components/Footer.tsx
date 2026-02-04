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
	{ href: '/uses', label: 'Uses' },
];

export const Footer: React.FC<FooterProps> = ({ name = 'John Doe' }) => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='flex items-center justify-between px-8 py-6 text-gray-600 text-sm'>
			<nav className='flex gap-6'>
				{navLinks.map((link) => (
					<Link key={link.href} href={link.href} className='transition-colors hover:text-gray-900'>
						{link.label}
					</Link>
				))}
			</nav>
			<p>
				© {currentYear} {name}. All rights reserved.
			</p>
		</footer>
	);
};

Footer.displayName = 'Footer';
