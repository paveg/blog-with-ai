import { getAllPosts } from '@/lib/getAllPosts';
import BlogList from '@/components/BlogList';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';

type Params = {
  year: string;
};

export default async function BlogYearPage({ params }: { params: Promise<Params> }) {
  const { year } = await params;
  const posts = getAllPosts().filter((post) => post.year === year);

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/blog">Blog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span aria-current="page" className="text-muted-foreground">
              {year}
            </span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl font-bold mb-6">{year}年の記事一覧</h1>
      <BlogList posts={posts} />
    </div>
  );
}
