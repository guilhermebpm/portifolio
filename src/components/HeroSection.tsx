'use client';

import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
	return (
		<section className="w-full max-w-[672px]">
			{/* Profile Image */}
			<div className="mb-6">
				<Image
					src="/p.jpg"
					alt="Profile"
					width={64}
					height={64}
					className="rounded-full border-2 border-zinc-100"
				/>
			</div>

			{/* Title */}
			<h1 className="font-bold text-[2.75rem] md:text-[2.875rem] text-zinc-800 leading-[1.2] tracking-tight mb-6">
				Software engineer, father, and believer
			</h1>

			{/* Description */}
			<p className="text-zinc-600 text-base font-normal leading-7 mb-6">
				Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit
				amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
				adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
				massa mi.
			</p>

			{/* Social Icons */}
			<div className="flex flex-row gap-4">
				<Link href="#" className="opacity-60 hover:opacity-100 transition-opacity">
					<Image
						src="/linkedin.svg"
						alt="LinkedIn"
						width={20}
						height={20}
						className="grayscale"
					/>
				</Link>
				<Link href="#" className="opacity-60 hover:opacity-100 transition-opacity">
					<Image
						src="/x.webp"
						alt="X (Twitter)"
						width={20}
						height={20}
						className="grayscale"
					/>
				</Link>
				<Link href="#" className="opacity-60 hover:opacity-100 transition-opacity">
					<Image
						src="/git.webp"
						alt="GitHub"
						width={20}
						height={20}
						className="grayscale"
					/>
				</Link>
			</div>
		</section>
	);
}
