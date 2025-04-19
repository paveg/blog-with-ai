import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type PostMeta = {
  title: string;
  date: string;
  description: string;
  slug: string;
  year: string;
};

export function getAllPosts(): PostMeta[] {
  const contentDir = path.join(process.cwd(), 'src/content');
  const posts: PostMeta[] = [];

  // 年ディレクトリを走査
  const years = fs.readdirSync(contentDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  for (const year of years) {
    const yearDir = path.join(contentDir, year);
    const files = fs.readdirSync(yearDir, { withFileTypes: true })
      .filter(dirent => dirent.isFile() && dirent.name.endsWith('.mdx'))
      .map(dirent => dirent.name);

    for (const fileName of files) {
      const fullPath = path.join(yearDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      const slug = fileName.replace(/\.mdx$/, '');
      posts.push({
        title: data.title,
        date: data.date,
        description: data.description,
        slug,
        year,
      });
    }
  }

  // 日付降順でソート
  posts.sort((a, b) => b.date.localeCompare(a.date));
  return posts;
}
