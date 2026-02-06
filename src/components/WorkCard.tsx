'use client';

import Image from 'next/image';

interface WorkExperience {
	company: string;
	role: string;
	logo: string;
	startYear: string;
	endYear: string;
}

const workExperiences: WorkExperience[] = [
	{
		company: 'Slack',
		role: 'SOFTWARE ENGINEER',
		logo: '/slack.png',
		startYear: '2016',
		endYear: 'Present',
	},
	{
		company: 'Spotify',
		role: 'SOFTWARE ENGINEER',
		logo: '/spotify.svg',
		startYear: '2014',
		endYear: '2015',
	},
	{
		company: 'Audible',
		role: 'SOFTWARE ENGINEER',
		logo: '/audible.png',
		startYear: '2012',
		endYear: '2013',
	},
	{
		company: 'Microsoft',
		role: 'SOFTWARE ENGINEER',
		logo: '/microsoft.svg',
		startYear: '2010',
		endYear: '2011',
	},
];

export function WorkCard() {
	return (
		<div className="w-full rounded-2xl border border-border bg-background p-6">
			{/* Header */}
			<div className='mb-4 flex items-center gap-3'>
				<svg className='h-6 w-6 text-muted' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={1.5}
						d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
					/>
				</svg>
				<h3 className="text-sm font-semibold text-foreground">Work</h3>
			</div>

			{/* Description */}
			<p className="text-sm text-muted-foreground leading-6 mb-6">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
			</p>

			{/* Work List */}
			<div className='space-y-4'>
				{workExperiences.map((work, index) => (
					<div key={index} className='flex items-center gap-4'>
						{/* Company Logo */}
						<div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center overflow-hidden flex-shrink-0">
							<Image
								src={work.logo}
								alt={work.company}
								width={24}
								height={24}
								className="object-contain"
							/>
						</div>

						{/* Company Info */}
						<div className="flex-1 min-w-0 ">
							<h4 className="text-sm font-medium text-foreground">{work.company}</h4>
							<p className="text-xs text-muted">{work.role}</p>
						</div>

						{/* Date Range */}
						<span className='flex-shrink-0 text-xs text-muted'>
							{work.startYear} - {work.endYear}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
