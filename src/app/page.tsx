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
					date="January 5, 2024"
					title="Building a modern React application with Next.js"
					excerpt="Learn how to structure, style, and deploy a production-ready React application using the Next.js App Router, TypeScript, and Tailwind CSS. We walk through file-based routing, data fetching, and performance optimizations."
					href="/article/nextjs-modern-react-app"
				/>
				<ArticleCard
					date="February 10, 2024"
					title="Improving web performance with code splitting"
					excerpt="Code splitting allows you to load only the JavaScript needed for the current page, dramatically reducing initial bundle size. This guide covers dynamic imports, route-based splits, and best practices for caching."
					href="/article/code-splitting-performance"
				/>
			</div>
		</div>
	);
import ProjectCard from '../components/projectcard';

export default function Home() {
  return (
    <main>
      <div>
        <ProjectCard />
      </div>
    </main>
  );
}