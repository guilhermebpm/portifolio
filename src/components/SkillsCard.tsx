'use client';

import Image from 'next/image';

interface Skill {
	name: string;
	level: number; // 0-100
	icon: string;
}

const skills: Skill[] = [
	{
		name: 'HTML',
		level: 50,
		icon: '/html.svg',
	},
	{
		name: 'CSS',
		level: 55,
		icon: '/css.svg',
	},
	{
		name: 'JavaScript',
		level: 50,
		icon: '/js.svg',
	},
];

export function SkillsCard() {
	return (
		<div className='w-full rounded-2xl border border-foreground/10 p-6'>
			{/* Header */}
			<div className='flex items-center gap-3 mb-4'>
				<svg className='w-6 h-6 text-foreground/40' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={1.5}
						d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
					/>
				</svg>
				<h3 className='text-sm font-semibold text-foreground'>Skills</h3>
			</div>

			{/* Description */}
			<p className='text-sm text-foreground/40 leading-6 mb-6'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
			</p>

			{/* Skills List */}
			<div className='space-y-5'>
				{skills.map((skill, index) => (
					<div key={index} className='flex items-center gap-4'>
						{/* Skill Icon */}
						<div className='w-10 h-10 py-1 rounded-full border border-foreground/10 bg-foreground/10 shadow-sm flex items-center justify-center overflow-hidden'>
							<Image src={skill.icon} alt={skill.name} width={24} height={24} className='object-contain' />
						</div>

						{/* Skill Info */}
						<div className='flex-1 min-w-0'>
							<h4 className='text-sm font-medium text-foreground/30 mb-2'>{skill.name}</h4>
							{/* Progress Bar */}
							<div className='w-full h-5 bg-foreground/10 overflow-hidden'>
								<div
									className='h-full transition-all duration-500'
									style={{
										width: `${skill.level}%`,
										backgroundColor: '#0E766E', // teal-500
									}}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
