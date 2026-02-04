import { ArticleCard } from '@/components/ArticleCard';

export default function Page() {
	return (
		<div className="p-8">
			<h1 className="text-3xl font-bold mb-8">Home</h1>
			
			<div className="max-w-2xl">
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
					href="/article/lorem-ipsum"
				/>
				<ArticleCard
					date="December 25, 2023"
					title="Lorem ipsum dolor sit amet"
					excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue..."
					href="/article/lorem-ipsum"
				/>
			</div>
		</div>
	);
}