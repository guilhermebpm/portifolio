'use client';

import React from 'react';
import Link from 'next/link';

interface ArticleCardProps {
  date: string;
  title: string;
  excerpt: string;
  href?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  date,
  title,
  excerpt,
  href = '#',
}) => {
  return (
    <article className="bg-white p-6 rounded-lg">
      {/* Barra cinza + Data */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-0.5 h-4 bg-zinc-200" />
        <time className="text-gray-400 text-sm font-normal">
          {date}
        </time>
      </div>

      {/* Title */}
      <h2 className="text-zinc-800 text-base font-semibold mb-4 leading-tight mt-3">
        {title}
      </h2>

      {/* Excerpt */}
      <p className="text-gray-700 text-sm leading-relaxed mb-6">
        {excerpt}
      </p>

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
// Article card component to display article information