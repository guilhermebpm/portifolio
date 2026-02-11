import Image from 'next/image';
import Link from 'next/link';
import UserIntro from '@/components/UserIntro';
import WorkStation from '@/components/WorkStation';
export default function users() {
	return (
		<main >
					{/* Hero Section */}
					<div className="mb-12 md:mb-20">
						<UserIntro />
					</div>
					<div className='max-w-[992px] w-full h-[2704px] md:ml-28 bg-background mt-6'>
			<div className='max-w-[992px] w-full h-fit bg-background flex flex-col md:flex-row justify-between'>
				<h3 className='w-full md:max-w-[118px] text-left font-bold font-sans text-base text-foreground md:leading-7 md:ml-9'>Workstation</h3>
				<div className='w-full md:w-[577px] h-fit bg-background'>
					<WorkStation />
					<WorkStation />
					<WorkStation />
					<WorkStation />
					<WorkStation />
				</div>
			</div>
			<div className='max-w-[992px] w-full h-fit bg-background flex flex-col md:flex-row justify-between'>
				<h3 className='w-full md:max-w-[118px] text-left font-bold font-sans text-base text-foreground md:leading-7 md:ml-9'>Development tools</h3>
				<div className='w-full md:w-[577px] h-fit bg-background'>
					<WorkStation />
					<WorkStation />
					<WorkStation />
				</div>
			</div>
			<div className='max-w-[992px] w-full h-fit bg-background flex flex-col md:flex-row justify-between'>
				<h3 className='w-full md:max-w-[118px] text-left font-bold font-sans text-base text-foreground md:leading-7 md:ml-9'>Design</h3>
				<div className='w-full md:w-[577px] h-fit bg-background'>
					<WorkStation />
					<WorkStation />
				</div>
			</div>
			<div className='max-w-[992px] w-full h-fit bg-background flex flex-col md:flex-row justify-between'>
				<h3 className='w-full md:max-w-[118px] text-left font-bold font-sans text-base text-foreground md:leading-7 md:ml-9'>Productivity</h3>
				<div className='w-full md:w-[577px] h-fit bg-background'>
					<WorkStation />				
					<WorkStation />
					<WorkStation />
					<WorkStation />
				</div>
			</div>
		</div>
			
		</main>
	);
}
