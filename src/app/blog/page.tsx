import { getAllPosts } from '@/lib/getAllPosts';
import BlogList from '@/components/BlogList';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">ブログ記事一覧</h1>
      <BlogList posts={posts} />
    </div>
  );
}
