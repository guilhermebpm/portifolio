export default function ProjectCard() {
	return (
		<div className='max-w-2xl h-fit gap-6'>
			<img className='w-16 h-16 rounded-full border-amber-50 border-2 mb-2' src='/p.jpg' alt='Author' />
			<h1 className='font-bold font-sans text-5xl text-zinc-800 text-left leading-[56px] tracking-[-0.01em] max-w-[672px]'>Software engineer, father, and believer</h1>
			<p className='text-zinc-600 text-base font-normal font-sans mt-2 mb-6 text-left leading-7'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.</p>
			<div className='flex flex-row gap-4 w-fit h-fit'>
				<img className='w-5 h-5 grayscale opacity-50' src='/linkedin.svg' alt='Linkedin'  />
				<img className='w-5 h-5 grayscale opacity-50' src='/x.webp' alt='Twitter'  />
				<img className='w-5 h-5 grayscale opacity-50' src='/git.webp' alt='GitHub'  />

			</div>
		</div>
	)

}