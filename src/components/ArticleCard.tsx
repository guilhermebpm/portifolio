'use client';

import React from 'react';
import Link from 'next/link';

interface ArticleCardProps {
	date: string;
	title: string;
	excerpt: string;
	href?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ date, title, excerpt, href = '#' }) => {
	return (
		<article className="relative bg-white py-6 md:py-8 md:pl-8">
			{/* Vertical Line - only visible on desktop */}
			<div className="hidden md:block absolute left-0 top-6 w-0.5 h-4 bg-zinc-200" />

			{/* Date */}
			<time className="text-zinc-400 text-sm font-normal block mb-3 underline md:no-underline decoration-zinc-300 underline-offset-2">
				{date}
			</time>

			{/* Title */}
			<h2 className="text-zinc-800 text-base font-semibold mb-3 leading-tight">{title}</h2>

			{/* Excerpt */}
			<p className="text-zinc-500 text-sm leading-6 mb-4">{excerpt}</p>

			{/* Read More Link */}
			<Link
				href={href}
				className="inline-flex items-center gap-2 text-teal-500 font-medium text-sm hover:text-teal-600 transition-colors group"
			>
				Read article
				<svg
					className="w-4 h-4 transition-transform group-hover:translate-x-1"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 5l7 7-7 7"
					/>
				</svg>
			</Link>
		</article>
	);
};