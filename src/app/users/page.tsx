import Image from 'next/image';
import Link from 'next/link';

import UserIntro from '@/components/UserIntro';
import WorkStation from '@/components/WorkStation';
export default function users() {
	return (
		<main>
			{/* Hero Section */}
			<div className='mb-4 md:mb-20'>
				<UserIntro />
			</div>
			<div className='mt-8 h-auto w-full max-w-[992px] bg-background md:ml-28'>
				<div className='flex h-fit w-full max-w-[992px] flex-col justify-between bg-background md:flex-row'>
					<h3 className='w-full text-left font-bold font-sans text-base text-foreground md:ml-9 md:leading-7'>Workstation</h3>
					<div className='h-fit w-full bg-background md:w-[577px]'>
						<WorkStation />
						<WorkStation />
						<WorkStation />
						<WorkStation />
						<WorkStation />
					</div>
				</div>
				<div className='mt-8 flex h-fit w-full max-w-[992px] flex-col justify-between bg-background md:flex-row'>
					<h3 className='w-full text-left font-bold font-sans text-base text-foreground md:ml-9 md:leading-7'>
						Development tools
					</h3>
					<div className='h-fit w-full bg-background md:w-[577px]'>
						<WorkStation />
						<WorkStation />
						<WorkStation />
					</div>
				</div>
				<div className='mt-8 flex h-fit w-full max-w-[992px] flex-col justify-between bg-background md:flex-row'>
					<h3 className='w-full text-left font-bold font-sans text-base text-foreground md:ml-9 md:max-w-[118px] md:leading-7'>
						Design
					</h3>
					<div className='h-fit w-full bg-background md:w-[577px]'>
						<WorkStation />
						<WorkStation />
					</div>
				</div>
				<div className='mt-8 flex h-fit w-full max-w-[992px] flex-col justify-between bg-background md:flex-row'>
					<h3 className='w-full text-left font-bold font-sans text-base text-foreground md:ml-9 md:max-w-[118px] md:leading-7'>
						Productivity
					</h3>
					<div className='h-fit w-full bg-background md:w-[577px]'>
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
