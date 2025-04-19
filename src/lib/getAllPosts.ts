import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type PostMeta = {
  title: string;
  date: string;
  description: string;
  slug: string;
  year: string;
  monthDay: string;
};

export function getAllPosts(): PostMeta[] {
  const contentDir = path.join(process.cwd(), 'src/content');
  const posts: PostMeta[] = [];

  function walk(dir: string, year = '', monthDay = '') {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
      if (file.isDirectory()) {
        if (year === '') {
          walk(path.join(dir, file.name), file.name, monthDay);
        } else if (monthDay === '') {
          walk(path.join(dir, file.name), year, file.name);
        }
      } else if (file.name.endsWith('.mdx')) {
        const fullPath = path.join(dir, file.name);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        posts.push({
          title: data.title,
          date: data.date,
          description: data.description,
          slug: data.slug,
          year,
          monthDay,
        });
      }
    }
  }

  walk(contentDir);
  // 日付降順でソート
  posts.sort((a, b) => b.date.localeCompare(a.date));
  return posts;
}
