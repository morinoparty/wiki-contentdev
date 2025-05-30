import { promises as fs } from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, "../content");
const IMAGES_DIR = path.join(CONTENT_DIR, "img");
const CATEGORIES_DIR = path.join(CONTENT_DIR, "categories");
const WIKI_DIR = path.join(CONTENT_DIR, "wiki");
const USERS_DIR = path.join(CONTENT_DIR, "users");

async function generateImagesList() {
  // ディレクトリがなければ作成
  try {
    await fs.access(IMAGES_DIR);
  } catch (e) {
    await fs.mkdir(IMAGES_DIR, { recursive: true });
  }
  const files = await fs.readdir(IMAGES_DIR);
  // 画像ファイルのみ抽出
  const images = files.filter((f) => !f.startsWith("."));
  await fs.writeFile(
    path.join(CONTENT_DIR, "images.json"),
    JSON.stringify(images, null, 2)
  );
}

async function generateCategoriesList() {
  const files = await fs.readdir(CATEGORIES_DIR);
  const categories: any[] = [];
  for (const file of files) {
    if (!file.endsWith(".json")) continue;
    const data = await fs.readFile(path.join(CATEGORIES_DIR, file), "utf-8");
    categories.push(JSON.parse(data));
  }
  await fs.writeFile(
    path.join(CONTENT_DIR, "categories.json"),
    JSON.stringify(categories, null, 2)
  );
}

function toUrlSlug(str: string): string {
  return encodeURIComponent(
    str
      .normalize("NFKC")
      .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) =>
        String.fromCharCode(s.charCodeAt(0) - 0xfee0)
      )
      .replace(/\s+/g, "-")
      .replace(/[\u3000]/g, "-")
      .replace(/--+/g, "-")
      .replace(/^-+|-+$/g, "")
      .toLowerCase()
  );
}

async function generateWikiList() {
  const files = await fs.readdir(WIKI_DIR);
  const wikiList: any[] = [];
  for (const file of files) {
    if (file.endsWith(".md")) {
      const data = await fs.readFile(path.join(WIKI_DIR, file), "utf-8");
      const { data: frontmatter } = matter(data);
      if (!frontmatter.slug) {
        console.log(`slugがありません: ${file}`);
      }
      wikiList.push({
        title: frontmatter.title,
        slug: toUrlSlug(frontmatter.slug ?? ""),
        date: frontmatter.date,
        description: frontmatter.description,
        category: frontmatter.category,
        image: frontmatter.image || null,
      });
    }
  }
  await fs.writeFile(
    path.join(CONTENT_DIR, "wiki.json"),
    JSON.stringify(wikiList, null, 2)
  );
}

async function generateUsersList() {
  const files = await fs.readdir(USERS_DIR);
  const users: any[] = [];
  for (const file of files) {
    if (!file.endsWith(".json")) continue;
    const userId = path.basename(file, ".json");
    const data = await fs.readFile(path.join(USERS_DIR, file), "utf-8");
    const user = JSON.parse(data);
    users.push({ id: userId, ...user });
  }
  await fs.writeFile(
    path.join(CONTENT_DIR, "users.json"),
    JSON.stringify(users, null, 2)
  );
}

async function main() {
  await generateImagesList();
  await generateCategoriesList();
  await generateWikiList();
  await generateUsersList();
  console.log("リスト生成が完了しました");
}

// ESM環境では即時実行でOK
main();
