'use client';

import { usePathname } from 'next/navigation';
import type React from 'react';

type NavbarItemProps = {
	active?: boolean;
	path: string;
	children: React.ReactNode;
};

function NavbarItem(props: NavbarItemProps) {
	const { children, path, active = false } = props;
	if (active) {
		return (
			<li className='relative cursor-pointer gap-1 bg-transparent px-3 py-2 font-medium text-sm text-teal-500 leading-6 focus-visible:ring focus-visible:ring-teal-400'>
				<span className='absolute right-0 bottom-0 left-0 h-px bg-linear-to-r from-15% from-white via-50% via-teal-500 to-85% to-white'></span>
				<a href={path}>{children}</a>
			</li>
		);
	}

	return (
		<li className='cursor-pointer gap-1 rounded-md px-3 py-2 font-medium text-sm text-zinc-800 leading-6 focus-within:ring focus-within:ring-teal-400 hover:text-teal-500'>
			<a href={path} className='outline-none'>
				{children}
			</a>
		</li>
	);
}

const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/uses', label: 'Uses' },
];

export function Navbar() {
	const path = usePathname();
	return (
		<ul className='flex flex-row rounded-full border border-zinc-500/5 bg-white px-3 shadow-lg'>
			{navLinks.map((link) => (
				<NavbarItem key={link.href} path={link.href} active={link.href === path}>
					{link.label}
				</NavbarItem>
			))}
		</ul>
	);
}
