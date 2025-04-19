import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
  params: {
    year: string;
    monthDay: string;
    slug: string;
  };
};

function getPostFilePath(year: string, monthDay: string, slug: string): string | null {
  const dir = path.join(process.cwd(), 'src/content', year, monthDay);
  if (!fs.existsSync(dir)) {
    return null;
  }
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.mdx')) {
      const filePath = path.join(dir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      if (data.slug === slug) {
        return filePath;
      }
    }
  }
  return null;
}

export default function PostPage({ params }: Props) {
  const { year, monthDay, slug } = params;
  const filePath = getPostFilePath(year, monthDay, slug);

  if (!filePath) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath!, 'utf8');
  const { data, content } = matter(fileContents);

  return (
    <div className="container py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{data.title}</CardTitle>
          <p className="text-xs text-muted-foreground mt-2">{data.date}</p>
        </CardHeader>
        <CardContent>
          <article className="prose prose-neutral max-w-none">
            <MDXRemote source={content} />
          </article>
        </CardContent>
      </Card>
    </div>
  );
}
