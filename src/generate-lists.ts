import { promises as fs } from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '../content');
const IMAGES_DIR = path.join(CONTENT_DIR, 'images');
const CATEGORIES_DIR = path.join(CONTENT_DIR, 'categories');
const WIKI_DIR = path.join(CONTENT_DIR, 'wiki');

async function generateImagesList() {
  const files = await fs.readdir(IMAGES_DIR);
  // 画像ファイルのみ抽出
  const images = files.filter(f => !f.startsWith('.'));
  await fs.writeFile(
    path.join(CONTENT_DIR, 'images.json'),
    JSON.stringify(images, null, 2)
  );
}

async function generateCategoriesList() {
  const files = await fs.readdir(CATEGORIES_DIR);
  const categories: any[] = [];
  for (const file of files) {
    if (!file.endsWith('.json')) continue;
    const data = await fs.readFile(path.join(CATEGORIES_DIR, file), 'utf-8');
    categories.push(JSON.parse(data));
  }
  await fs.writeFile(
    path.join(CONTENT_DIR, 'categories.json'),
    JSON.stringify(categories, null, 2)
  );
}

async function generateWikiList() {
  const files = await fs.readdir(WIKI_DIR);
  const wikiList: any[] = [];
  for (const file of files) {
    if (!file.endsWith('.json')) continue;
    const data = await fs.readFile(path.join(WIKI_DIR, file), 'utf-8');
    const json = JSON.parse(data);
    wikiList.push({
      title: json.title,
      slug: json.slug,
      date: json.date,
      description: json.description,
      category: json.category,
      image: json.image || null
    });
  }
  await fs.writeFile(
    path.join(CONTENT_DIR, 'wiki.json'),
    JSON.stringify(wikiList, null, 2)
  );
}

async function main() {
  await generateImagesList();
  await generateCategoriesList();
  await generateWikiList();
  console.log('リスト生成が完了しました');
}

// ESM環境では即時実行でOK
main();
