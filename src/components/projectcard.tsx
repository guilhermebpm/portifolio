'use client';

import Image from 'next/image';

interface Project {
	logo: string;
	name: string;
	details: string;
	link: string;
}

const projects: Project[] = [
	{
		logo: '/svg.png',
		name: 'Company',
		details: 'Creating technology to empower civilians to explore space on their own terms.',
		link: 'https://company.com',
	},
	{
		logo: '/svg.png',
		name: 'Company',
		details: 'Creating technology to empower civilians to explore space on their own terms.',
		link: 'https://company.com',
	},
	{
		logo: '/svg.png',
		name: 'Company',
		details: 'Creating technology to empower civilians to explore space on their own terms.',
		link: 'https://company.com',
	},
	{
		logo: '/svg.png',
		name: 'Company',
		details: 'Creating technology to empower civilians to explore space on their own terms.',
		link: 'https://company.com',
	},
	{
		logo: '/svg.png',
		name: 'Company',
		details: 'Creating technology to empower civilians to explore space on their own terms.',
		link: 'https://company.com',
	},
	{
		logo: '/svg.png',
		name: 'Company',
		details: 'Creating technology to empower civilians to explore space on their own terms.',
		link: 'https://company.com',
	},
];

export default function ProjectCard() {
	return (
		<div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
			{projects.map((project, index) => (
				<div key={index} className='flex flex-col gap-4'>
					{/* Logo */}
					<div className='flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 bg-background shadow-sm'>
						<Image src={project.logo} alt={project.name} width={28} height={28} className='object-contain' />
					</div>

					{/* Name */}
					<h3 className='text-base font-semibold text-foreground'>{project.name}</h3>

					{/* Details */}
					<p className='text-sm leading-6 text-muted-foreground'>{project.details}</p>

					{/* Link */}
					<a
						href={project.link}
						target='_blank'
						rel='noopener noreferrer'
						className='mt-auto flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent'
					>
						{/* Light mode icon */}
						<img src='/portifolio/Link.png' alt='Link' width={16} height={16} className='block dark:hidden' />
						{/* Dark mode icon */}
						<img src='/portifolio/link-dark.png' alt='Link' width={16} height={16} className='hidden dark:block' />
						<span>{project.link}</span>
					</a>
				</div>
			))}
		</div>
	);
}