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

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container py-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span aria-current="page" className="text-muted-foreground">
              Blog
            </span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl font-bold mb-6">ブログ記事一覧</h1>
      <BlogList posts={posts} />
    </div>
  );
}
