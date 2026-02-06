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
		<div className="w-full rounded-2xl border border-zinc-100 bg-white p-6 dark:bg-background dark:text-foreground">
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
				<h3 className="text-sm font-semibold text-zinc-900 dark:bg-background dark:text-foreground">Skills</h3>
			</div>

			{/* Description */}
			<p className="text-sm text-zinc-600 leading-6 mb-6 dark:bg-background dark:text-foreground">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
			</p>

			{/* Skills List */}
			<div className='space-y-4'>
				{skills.map((skill, index) => (
					<div key={index} className='flex items-center gap-4'>
						{/* Skill Icon */}
						<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 dark:bg-background dark:text-foreground">
							<Image
								src={skill.icon}
								alt={skill.name}
								width={48}
								height={48}
								className="object-contain dark:bg-background dark:text-foreground"
							/>
						</div>

						{/* Skill Info */}
						<div className="flex-1 min-w-0">
							<h4 className="text-sm font-medium text-zinc-900 mb-2 dark:bg-background dark:text-foreground">{skill.name}</h4>
							{/* Progress Bar */}
							<div className="w-full h-6 bg-zinc-200  overflow-hidden">
								<div
									className="h-6 transition-all duration-500"
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
