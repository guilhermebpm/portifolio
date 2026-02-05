'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type NavbarItemProps = {
	path: string;
	children: React.ReactNode;
	onClick?: () => void;
};

function NavbarItem({ children, path, onClick }: NavbarItemProps) {
	const pathname = usePathname();
	const isActive = pathname === path || (path !== '/' && pathname.startsWith(path));

	return (
		<li
			className={`relative cursor-pointer px-3 py-2 font-medium text-sm leading-6 transition-colors duration-200 ${
				isActive ? 'text-teal-500' : 'text-zinc-800 hover:text-teal-500'
			}`}
		>
			<Link href={path} className="outline-none" onClick={onClick}>
				{children}
			</Link>

			{isActive && (
				<div className="absolute inset-x-0 bottom-0 flex justify-center">
					<div
						className="w-[51px] h-[2px] z-0"
						style={{
							background:
								'linear-gradient(to right, transparent, oklch(70.4% 0.14 182.503), transparent)',
							boxShadow: '0 4px 12px oklch(70.4% 0.14 182.503)',
						}}
					></div>
				</div>
			)}
		</li>
	);
}

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			{/* Desktop Navigation */}
			<nav className="hidden md:block">
				<ul className="flex h-10 w-fit flex-row items-center gap-1 rounded-full border border-zinc-100 bg-white px-3 shadow-lg">
					<NavbarItem path="/">Home</NavbarItem>
					<NavbarItem path="/about">About</NavbarItem>
					<NavbarItem path="/projects">Projects</NavbarItem>
					<NavbarItem path="/users">Uses</NavbarItem>
				</ul>
			</nav>

			{/* Mobile Menu Button */}
			<div className="md:hidden">
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-100 bg-white shadow-lg text-sm font-medium text-zinc-800"
				>
					Menu
					<svg
						className={`w-4 h-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>
			</div>

			{/* Mobile Dropdown Menu */}
			{isMenuOpen && (
				<>
					{/* Backdrop */}
					<div
						className="fixed inset-0 bg-black/20 z-40 md:hidden"
						onClick={() => setIsMenuOpen(false)}
					/>

					{/* Dropdown */}
					<div className="absolute top-16 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[320px] bg-white rounded-2xl shadow-xl border border-zinc-100 z-50 md:hidden">
						<ul className="py-3">
							<li>
								<Link
									href="/"
									className="block px-6 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-50"
									onClick={() => setIsMenuOpen(false)}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="block px-6 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-50"
									onClick={() => setIsMenuOpen(false)}
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/projects"
									className="block px-6 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-50"
									onClick={() => setIsMenuOpen(false)}
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									href="/users"
									className="block px-6 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-50"
									onClick={() => setIsMenuOpen(false)}
								>
									Uses
								</Link>
							</li>
						</ul>
					</div>
				</>
			)}
		</>
	);
}
