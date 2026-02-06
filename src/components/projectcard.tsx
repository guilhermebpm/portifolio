export default function ProjectCard() {
	return (
		<div className='max-w-[392px] md:max-w-2xl w-full h-full gap-6 opacity-100 rotation-0 py-1 md:pb-0 md:ml-36 bg-background'>
			<img className='w-16 h-16 rounded-full border-white border-2 mb-6' src='/p.jpg' alt='Author' />
			<div className='w-full h-28 rotate-0 opacity-100 md:mb-6'>
			<h1 className='font-bold font-sans text-[31px] leading-[40px] md:text-5xl text-foreground text-left md:leading-[56px] tracking-[-0.01em] max-w-[672px]'>Software engineer, father, and believer</h1>
			</div>
			<div className='w-full h-full'>
			<p className='text-foreground text-base font-normal font-sans text-left leading-[28px] md:leading-7 tracking-normal'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.</p>
			</div>
			<div className='flex flex-row gap-3 w-24 h-6 rotate-0 opacity-100 mt-6'>
				<img className='w-5 h-5' src='/linkedin.svg' alt='Linkedin'  />
				<img className='w-5 h-5' src='/x.svg' alt='Twitter'  />
				<img className='w-5 h-5' src='/git.svg' alt='GitHub'  />

			</div>
		</div>
	)

}