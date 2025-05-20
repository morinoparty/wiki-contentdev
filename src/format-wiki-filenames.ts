import { promises as fs } from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WIKI_DIR = path.join(__dirname, "../content/wiki");

/**
 * 文字列をURLとして読める形（小文字・記号正規化）に変換する
 */
function toUrlSlug(str: string): string {
  return str
    .normalize('NFKC')
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0)) // 全角英数字→半角
    .replace(/[^\w\-]+/g, '-') // 非単語文字→ハイフン
    .replace(/--+/g, '-') // ハイフン連続→1つ
    .replace(/^-+|-+$/g, '') // 先頭・末尾ハイフン除去
    .toLowerCase();
}

/**
 * wikiディレクトリ内のファイル名をslugに揃える
 * ファイル名とslugが異なる場合、git mvでリネームする
 */
async function formatWikiFilenames() {
  const files = await fs.readdir(WIKI_DIR);
  for (const file of files) {
    if (!file.endsWith(".json")) continue;
    const filePath = path.join(WIKI_DIR, file);
    const data = await fs.readFile(filePath, "utf-8");
    const json = JSON.parse(data);
    if (!json.slug) continue;
    const urlSlug = toUrlSlug(json.slug);
    const expectedFileName = `${urlSlug}.json`;
    if (file !== expectedFileName) {
      const newFilePath = path.join(WIKI_DIR, expectedFileName);
      // 既に同名ファイルが存在しないかチェック
      try {
        await fs.access(newFilePath);
        console.warn(`スキップ: ${expectedFileName} は既に存在します`);
        continue;
      } catch {
        // git mvでリネーム
        await new Promise((resolve, reject) => {
          exec(
            `git mv "${filePath}" "${newFilePath}"`,
            (err, stdout, stderr) => {
              if (err) {
                console.error(`git mv 失敗: ${filePath} → ${newFilePath}`);
                reject(err);
              } else {
                console.log(`リネーム: ${file} → ${expectedFileName}`);
                resolve(undefined);
              }
            }
          );
        });
      }
    }
  }
  console.log("ファイル名のフォーマットが完了しました");
}

formatWikiFilenames();
