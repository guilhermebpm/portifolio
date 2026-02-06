'use client';

import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
	return (
		<section className='w-full max-w-[672px] bg-white dark:bg-zinc-900'>
			{/* Profile Image */}
			<div className='mb-6'>
				<Image src='/p.jpg' alt='Profile' width={64} height={64} className='rounded-full border-2 border-zinc-100 dark:border-zinc-800' />
			</div>

			{/* Title */}
			<h1 className='mb-6 font-bold text-[2.75rem] text-zinc-800 dark:text-zinc-100 leading-[1.2] tracking-tight md:text-[2.875rem]'>
				Software engineer, father, and believer
			</h1>

			{/* Description */}
			<p className='mb-6 font-normal text-base text-zinc-600 dark:text-zinc-400 leading-7'>
				Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing
				elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet
				consectetur adipiscing elit Ut et massa mi.
			</p>

			{/* Social Icons */}
			<div className='flex flex-row gap-4'>
				<Link href='#' className='opacity-60 transition-opacity hover:opacity-100'>
					<Image src='/linkedin.svg' alt='LinkedIn' width={20} height={20} className='grayscale' />
				</Link>
				<Link href='#' className='opacity-60 transition-opacity hover:opacity-100'>
					<Image src='/x.webp' alt='X (Twitter)' width={20} height={20} className='grayscale' />
				</Link>
				<Link href='#' className='opacity-60 transition-opacity hover:opacity-100'>
					<Image src='/git.webp' alt='GitHub' width={20} height={20} className='grayscale' />
				</Link>
			</div>
		</section>
	);
}
