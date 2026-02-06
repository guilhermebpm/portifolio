import { ArticleCard } from '@/components/ArticleCard';
import { HeroSection } from '@/components/HeroSection';
import { NewsletterCard } from '@/components/NewsletterCard';
import { WorkCard } from '@/components/WorkCard';
import { SkillsCard } from '@/components/SkillsCard';

export default function Home() {
	return (
		<main className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-36 pt-6 md:pt-0 pb-16">
			{/* Hero Section */}
			<div className="mb-12 md:mb-6">
				<HeroSection />
			</div>

			{/* Main Content Grid */}
			<div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
				{/* Left Column - Articles */}
				<div className="flex-1 order-2 lg:order-1">
					<div className="space-y-0">
						<ArticleCard
							date="December 25, 2023"
							title="Lorem ipsum dolor sit amet"
							excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue..."
							href="/article/lorem-ipsum"
						/>
						<ArticleCard
							date="December 25, 2023"
							title="Lorem ipsum dolor sit amet"
							excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue..."
							href="/article/lorem-ipsum-2"
						/>
						<ArticleCard
							date="December 25, 2023"
							title="Lorem ipsum dolor sit amet"
							excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue..."
							href="/article/lorem-ipsum-3"
						/>
					</div>
				</div>

				{/* Right Column - Sidebar */}
				<div className="w-full lg:w-[368px] flex-shrink-0 order-1 lg:order-2">
					<div className="space-y-6">
						<NewsletterCard />
						<WorkCard />
						<SkillsCard />
					</div>
				</div>
			</div>
		</main>
	);
}