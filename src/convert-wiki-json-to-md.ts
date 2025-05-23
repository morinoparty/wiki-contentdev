import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 変換元と変換先のディレクトリ
const WIKI_JSON_DIR = path.join(__dirname, "../content/wiki");
const WIKI_MD_DIR = path.join(__dirname, "../content/wiki-md");

// 変換処理
function convertWikiJsonToMd() {
  if (!fs.existsSync(WIKI_MD_DIR)) {
    fs.mkdirSync(WIKI_MD_DIR);
  }

  const files = fs
    .readdirSync(WIKI_JSON_DIR)
    .filter((f) => f.endsWith(".json"));

  files.forEach((file) => {
    const filePath = path.join(WIKI_JSON_DIR, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const json = JSON.parse(raw);

    // frontmatter用にmetaを抽出
    const { date, title, slug, description, category, image } = json;
    const body = json.body || "";

    // 画像パスの整形（必要に応じて）
    let imagePath = image;
    if (imagePath && imagePath.startsWith("/img/")) {
      imagePath = imagePath.replace("/img/", "../img/");
    }

    // undefined値を除外したfrontmatterを生成
    const frontmatterRaw = {
      date,
      title,
      slug,
      description,
      category,
      ...(imagePath ? { image: imagePath } : {}),
    };
    const frontmatter = Object.fromEntries(
      Object.entries(frontmatterRaw).filter(([_, v]) => v !== undefined)
    );

    const md = matter.stringify(body, frontmatter);
    const mdFileName = `${slug || path.basename(file, ".json")}.md`;
    const mdFilePath = path.join(WIKI_MD_DIR, mdFileName);
    fs.writeFileSync(mdFilePath, md, "utf-8");
    console.log(`Converted: ${file} -> ${mdFileName}`);
  });
}

convertWikiJsonToMd();
