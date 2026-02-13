import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
	return (
		<main className='mx-auto w-full max-w-[1280px] px-6 pt-12 pb-16 md:px-8 md:pt-16 lg:px-[144px]'>
			<h1 className='mb-6 font-bold text-[2.5rem] text-foreground leading-[1.15] tracking-tight md:text-[2.75rem]'>
				Things I&apos;ve made trying to put my dent in the universe.
			</h1>

			<p className='mb-12 text-base text-muted-foreground leading-7'>
				Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
				adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem
				ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
			</p>

			<ProjectCard />
		</main>
	);
}