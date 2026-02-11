'use client';

// biome-ignore assist/source/organizeImports: <explanation>
import type React from 'react';
import Link from 'next/link';
import type React from 'react';

interface ArticleCardProps {
	date: string;
	title: string;
	excerpt: string;
	href?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ date, title, excerpt, href = '#' }) => {
	return (
		<article className='relative py-6 md:py-5 md:pl-0'>
			{/* Vertical Line - only visible on desktop */}
			<div className='absolute top-6 left-0 hidden h-4 w-0.5 bg-background md:block' />

			{/* Date */}
			<time className='mb-3 flex items-center gap-2 font-normal text-foreground/50 text-sm underline decoration-background underline-offset-2 md:no-underline'>
				<span className='text-foreground text-lg'>|</span>
				{date}
			</time>

			{/* Title */}
			<h2 className='mb-3 font-semibold text-base text-foreground leading-tight'>{title}</h2>

			{/* Excerpt */}
			<p className='mb-4 text-foreground/50 text-sm leading-6'>{excerpt}</p>

			{/* Read More Link */}
			<Link
				href={href}
				className='group inline-flex items-center gap-2 font-medium text-sm text-teal-500 transition-colors hover:text-teal-600'
			>
				Read article
				<svg
					className='h-4 w-4 transition-transform group-hover:translate-x-1'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
				>
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
				</svg>
			</Link>
		</article>
	);
};
