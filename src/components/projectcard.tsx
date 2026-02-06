export default function ProjectCard() {
	return (
		<div className='rotation-0 h-full w-full max-w-[392px] gap-6 bg-background py-1 opacity-100 md:ml-36 md:max-w-2xl md:pb-0'>
			<img className='mb-6 h-16 w-16 rounded-full border-2 border-white' src='/p.jpg' alt='Author' />
			<div className='h-28 w-full rotate-0 opacity-100 md:mb-6'>
				<h1 className='max-w-[672px] text-left font-bold font-sans text-[31px] text-foreground leading-[40px] tracking-[-0.01em] md:text-5xl md:leading-[56px]'>
					Software engineer, father, and believer
				</h1>
			</div>
			<div className='h-full w-full'>
				<p className='text-left font-normal font-sans text-base text-foreground leading-[28px] tracking-normal md:leading-7'>
					Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
					adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor
					sit amet consectetur adipiscing elit Ut et massa mi.
				</p>
			</div>
			<div className='mt-6 flex h-6 w-24 rotate-0 flex-row gap-3 opacity-100'>
				<img className='h-5 w-5' src='/linkedin.svg' alt='Linkedin' />
				<img className='h-5 w-5' src='/x.svg' alt='Twitter' />
				<img className='h-5 w-5' src='/git.svg' alt='GitHub' />
			</div>
		</div>
	);
}
