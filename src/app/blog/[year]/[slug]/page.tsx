import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrism from 'rehype-prism-plus';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';
import Details from '@/components/mdx/Details';
import Summary from '@/components/mdx/Summary';
import { H1, H2, H3, H4, H5, H6 } from '@/components/mdx/Heading';
import { Paragraph } from '@/components/mdx/Paragraph';
import { Anchor } from '@/components/mdx/Anchor';
import { Ul, Ol, Li } from '@/components/mdx/List';
import { Blockquote } from '@/components/mdx/Blockquote';
import { Code } from '@/components/mdx/Code';
import { Image } from '@/components/mdx/Image';
import { Table } from '@/components/mdx/Table';
import Strong from '@/components/mdx/Strong';
import Em from '@/components/mdx/Em';
import Del from '@/components/mdx/Del';
import Hr from '@/components/mdx/Hr';
import TaskListItem from '@/components/mdx/TaskListItem';

type Params = {
  year: string;
  slug: string;
};

function getPostFilePath(year: string, slug: string): string | null {
  const filePath = path.join(process.cwd(), 'src/content', year, `${slug}.mdx`);
  if (fs.existsSync(filePath)) {
    return filePath;
  }
  return null;
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { year, slug } = await params;
  const filePath = getPostFilePath(year, slug);

  if (!filePath) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

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
            <BreadcrumbLink asChild>
              <Link href="/blog">Blog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/blog/${year}`}>{year}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span aria-current="page" className="text-muted-foreground">
              {data.title}
            </span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle as="h1" className="text-2xl">
            {data.title}
          </CardTitle>
          <p className="text-xs text-muted-foreground mt-2">{data.date}</p>
        </CardHeader>
        <CardContent>
          <article className="prose prose-neutral max-w-none">
            <MDXRemote
              source={content}
              components={{
                h1: H1,
                h2: H2,
                h3: H3,
                h4: H4,
                h5: H5,
                h6: H6,
                p: Paragraph,
                a: Anchor,
                ul: Ul,
                ol: Ol,
                li: Li,
                blockquote: Blockquote,
                code: Code,
                img: Image,
                table: Table,
                strong: Strong,
                em: Em,
                del: Del,
                hr: Hr,
                TaskListItem: TaskListItem,
                details: Details,
                summary: Summary,
                Card,
                CardHeader,
                CardTitle,
                CardContent,
              }}
              options={{
                mdxOptions: {
                  rehypePlugins: [rehypePrism],
                },
              }}
            />
          </article>
        </CardContent>
      </Card>
    </div>
  );
}
