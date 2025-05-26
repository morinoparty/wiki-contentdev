import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WIKI_DIR = path.join(__dirname, "../content/wiki");

function replaceCategoryToArchive() {
  const files = fs.readdirSync(WIKI_DIR).filter((f) => f.endsWith(".md"));
  files.forEach((file) => {
    const filePath = path.join(WIKI_DIR, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const parsed = matter(raw);
    if (parsed.data.category !== "archive") {
      parsed.data.category = "archive";
      const newContent = matter.stringify(parsed.content, parsed.data);
      fs.writeFileSync(filePath, newContent, "utf-8");
      console.log(`categoryをアーカイブに変更: ${file}`);
    }
  });
  console.log("全てのcategoryをアーカイブに置換しました");
}

replaceCategoryToArchive();
