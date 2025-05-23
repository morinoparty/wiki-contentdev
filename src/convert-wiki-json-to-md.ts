import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 変換元ディレクトリ（md化されたjsonファイルが入っている）
const WIKI_MD_DIR = path.join(__dirname, "../content/wiki");

// 変換処理
function convertWikiJsonToMd() {
  const files = fs.readdirSync(WIKI_MD_DIR).filter((f) => f.endsWith(".md"));

  files.forEach((file) => {
    const filePath = path.join(WIKI_MD_DIR, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    let json;
    try {
      json = JSON.parse(raw);
    } catch (e) {
      console.error(`Skip: ${file} (not a JSON)`);
      return;
    }

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
    fs.writeFileSync(filePath, md, "utf-8");
    console.log(`Converted: ${file}`);
  });
}

convertWikiJsonToMd();
