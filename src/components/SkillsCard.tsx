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
		icon: '/javascript.svg',
	},
];

export function SkillsCard() {
	return (
		<div className='w-full rounded-2xl border border-zinc-100 bg-white p-6'>
			{/* Header */}
			<div className='mb-4 flex items-center gap-3'>
				<svg className='h-6 w-6 text-zinc-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={1.5}
						d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
					/>
				</svg>
				<h3 className='font-semibold text-sm text-zinc-900'>Skills</h3>
			</div>

			{/* Description */}
			<p className='mb-6 text-sm text-zinc-600 leading-6'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
			</p>

			{/* Skills List */}
			<div className='space-y-4'>
				{skills.map((skill, index) => (
					<div key={index} className='flex items-center gap-4'>
						{/* Skill Icon */}
						<div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white'>
							<Image src={skill.icon} alt={skill.name} width={32} height={32} className='object-contain' />
						</div>

						{/* Skill Info */}
						<div className='min-w-0 flex-1'>
							<h4 className='mb-2 font-medium text-sm text-zinc-900'>{skill.name}</h4>
							{/* Progress Bar */}
							<div className='h-2 w-full overflow-hidden rounded-full bg-zinc-200'>
								<div
									className='h-full rounded-full transition-all duration-500'
									style={{
										width: `${skill.level}%`,
										backgroundColor: '#14b8a6', // teal-500
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
