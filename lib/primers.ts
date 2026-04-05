import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

const primersDirectory = path.join(process.cwd(), 'content/field-notes');

export interface PrimerMeta {
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
}

export interface Primer extends PrimerMeta {
  contentHtml: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  primers: PrimerMeta[];
}

const categoryMeta: Record<string, { name: string; description: string }> = {
  'llms-and-nlp': {
    name: 'LLMs & NLP',
    description: 'Large language models, natural language processing, and text understanding.',
  },
  'enterprise-ai': {
    name: 'Enterprise AI',
    description: 'Deploying AI at scale in Fortune 100 environments.',
  },
  'ml-engineering': {
    name: 'ML Engineering',
    description: 'Building, training, and optimizing machine learning systems.',
  },
  'software-engineering': {
    name: 'Software Engineering',
    description: 'System design, architecture, and engineering fundamentals.',
  },
  'rag-and-agents': {
    name: 'RAG & Agents',
    description: 'Retrieval-augmented generation and autonomous AI agents.',
  },
  'system-design': {
    name: 'System Design',
    description: 'Designing scalable, reliable distributed systems.',
  },
  'data-engineering': {
    name: 'Data Engineering',
    description: 'Pipelines, warehousing, and data infrastructure.',
  },
  'mlops': {
    name: 'MLOps',
    description: 'Operationalizing ML - deployment, monitoring, and lifecycle management.',
  },
};

export function getAllCategories(): Category[] {
  const categories: Category[] = [];

  if (!fs.existsSync(primersDirectory)) return categories;

  const categoryDirs = fs.readdirSync(primersDirectory);

  for (const dir of categoryDirs) {
    const fullPath = path.join(primersDirectory, dir);
    if (!fs.statSync(fullPath).isDirectory()) continue;

    const files = fs.readdirSync(fullPath).filter((f) => f.endsWith('.md'));
    if (files.length === 0) continue;

    const primers: PrimerMeta[] = files.map((file) => {
      const fileContents = fs.readFileSync(path.join(fullPath, file), 'utf8');
      const { data } = matter(fileContents);
      return {
        slug: file.replace(/\.md$/, ''),
        category: dir,
        title: data.title || file.replace(/\.md$/, ''),
        description: data.description || '',
        date: data.date || '',
      };
    });

    primers.sort((a, b) => (a.date > b.date ? -1 : 1));

    const meta = categoryMeta[dir] || { name: dir, description: '' };

    categories.push({
      slug: dir,
      name: meta.name,
      description: meta.description,
      primers,
    });
  }

  return categories;
}

export async function getPrimer(category: string, slug: string): Promise<Primer | null> {
  const filePath = path.join(primersDirectory, category, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(remarkGfm).use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    category,
    title: data.title || slug,
    description: data.description || '',
    date: data.date || '',
    contentHtml,
  };
}

export function getAllPrimerPaths(): { category: string; slug: string }[] {
  const paths: { category: string; slug: string }[] = [];

  if (!fs.existsSync(primersDirectory)) return paths;

  const categoryDirs = fs.readdirSync(primersDirectory);

  for (const dir of categoryDirs) {
    const fullPath = path.join(primersDirectory, dir);
    if (!fs.statSync(fullPath).isDirectory()) continue;

    const files = fs.readdirSync(fullPath).filter((f) => f.endsWith('.md'));
    for (const file of files) {
      paths.push({
        category: dir,
        slug: file.replace(/\.md$/, ''),
      });
    }
  }

  return paths;
}
