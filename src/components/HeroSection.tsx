'use client';

import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
	return (
		<div className='max-w-98 md:max-w-2xl w-full h-full gap-6 opacity-100 rotation-0 py-1 md:pb-0 md:ml-0 bg-background'>
			<img className='w-16 h-16 rounded-full border-white border-2 mb-6' src='/portifolio/p.jpg' alt='Author' />
			<div className='w-full h-28 rotate-0 opacity-100 md:mb-6'>
				<h1 className='font-bold font-sans text-[31px] leading-10 md:text-5xl text-foreground text-left md:leading-14 tracking-[-0.01em] max-w-2xl'>
					Student aspiring to become a Software Engineer
				</h1>
			</div>
			<div className='w-full h-full'>
				<p className='text-foreground text-base font-normal font-sans text-left leading-7 md:leading-7 tracking-normal'>
					Software Engineering student focused on building scalable and well-structured applications. Currently learning TypeScript while strengthening my skills in backend development, database design, and clean architecture.
				</p>
			</div>
			<div className='flex flex-row gap-3 w-24 h-6 rotate-0 opacity-100 mt-6'>
				<img className='w-5 h-5' src='/portifolio/linkedin.svg' alt='Linkedin' />
				<img className='w-5 h-5' src='/portifolio/x.svg' alt='Twitter' />
				<img className='w-5 h-5' src='/portifolio/git.svg' alt='GitHub' />
			</div>
		</div>
	);
}
