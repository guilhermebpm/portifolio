'use client';

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
        <article className='relative bg-background py-6 md:py-8 md:pl-8'>
            {/* Vertical Line - only visible on desktop */}
            <div className='absolute top-6 left-0 hidden h-4 w-0.5 bg-border md:block' />

            {/* Date */}
            <time className='mb-3 block font-normal text-sm text-muted underline decoration-border underline-offset-2 md:no-underline'>
                {date}
            </time>

            {/* Title */}
            <h2 className='mb-3 font-semibold text-base text-foreground leading-tight'>{title}</h2>

            {/* Excerpt */}
            <p className='mb-4 text-sm text-muted-foreground leading-6'>{excerpt}</p>

            {/* Read More Link */}
            <Link
                href={href}
                className='group inline-flex items-center gap-2 font-medium text-sm text-accent transition-colors hover:text-teal-600 dark:hover:text-teal-300'
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
