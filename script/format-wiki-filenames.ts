import { promises as fs } from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { exec, execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WIKI_DIR = path.join(__dirname, "../content/wiki");
const WIKI_MD_DIR = path.join(__dirname, "../content/wiki-md");

/**
 * 文字列をURLとして読める形（小文字・記号正規化）に変換する
 */
function toUrlSlug(str: string): string {
  // encodeURIComponentで日本語もURLセーフに
  return encodeURIComponent(
    str
      .normalize("NFKC")
      .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) =>
        String.fromCharCode(s.charCodeAt(0) - 0xfee0)
      ) // 全角英数字→半角
      .replace(/\s+/g, "-") // 空白→ハイフン
      .replace(/[\u3000]/g, "-") // 全角スペース→ハイフン
      .replace(/--+/g, "-") // ハイフン連続→1つ
      .replace(/^-+|-+$/g, "") // 先頭・末尾ハイフン除去
      .toLowerCase()
  );
}

/**
 * wikiディレクトリ内のファイル名をslugに揃える
 * ファイル名とslugが異なる場合、git mvでリネームする
 */
async function formatWikiFilenames() {
  // 対象ディレクトリを配列でまとめて処理
  const TARGET_DIRS = [WIKI_DIR, WIKI_MD_DIR];
  for (const DIR of TARGET_DIRS) {
    const files = await fs.readdir(DIR);
    for (const file of files) {
      if (!file.endsWith(".json") && !file.endsWith(".md")) continue;
      const filePath = path.join(DIR, file);
      const data = await fs.readFile(filePath, "utf-8");
      let slug;
      try {
        // JSONの場合
        if (file.endsWith(".json")) {
          const json = JSON.parse(data);
          slug = json.slug;
        } else if (file.endsWith(".md")) {
          // Markdownの場合frontmatterからslugを抽出
          const match = data.match(/^---[\s\S]*?slug:\s*(.+)$/m);
          if (match) {
            slug = match[1].trim().replace(/^['"]|['"]$/g, "");
          }
        }
      } catch {
        continue;
      }
      if (!slug) continue;
      const urlSlug = toUrlSlug(slug);
      const expectedFileName = `${urlSlug}${file.endsWith(".json") ? ".json" : ".md"}`;
      if (file !== expectedFileName) {
        const newFilePath = path.join(DIR, expectedFileName);
        // 既に同名ファイルが存在しないかチェック
        try {
          await fs.access(newFilePath);
          console.warn(`スキップ: ${expectedFileName} は既に存在します`);
          continue;
        } catch {
          // Git管理下かどうか判定
          let isGitTracked = false;
          try {
            execSync(`git ls-files --error-unmatch "${filePath}"`, {
              stdio: "ignore",
            });
            isGitTracked = true;
          } catch {
            isGitTracked = false;
          }
          if (isGitTracked) {
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
          } else {
            // fs.renameでリネーム
            await fs.rename(filePath, newFilePath);
            console.log(`(git管理外) リネーム: ${file} → ${expectedFileName}`);
          }
        }
      }
    }
  }
  console.log("ファイル名のフォーマットが完了しました");
}

formatWikiFilenames();
