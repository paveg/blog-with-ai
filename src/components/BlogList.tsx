import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { PostMeta } from '@/lib/getAllPosts';

type BlogListProps = {
  posts: PostMeta[];
};

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <Card key={post.slug}>
          <Link href={`/blog/${post.year}/${post.monthDay}/${post.slug}`}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{post.description}</p>
              <p className="text-xs mt-2">{post.date}</p>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}
