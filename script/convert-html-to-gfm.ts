import "dotenv/config";

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

// __dirnameの定義
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 対象ディレクトリ
const WIKI_DIR = path.join(__dirname, "../content/wiki");

// HTMLタグ検出用の正規表現
const htmlTagRegex =
  /<([a-zA-Z][a-zA-Z0-9]*)(\s[^>]*)?>[\s\S]*?<\/\1>|<([a-zA-Z][a-zA-Z0-9]*)(\s[^>]*)?\/>/g;

async function convertFile(filePath: string) {
  const raw = fs.readFileSync(filePath, "utf-8");
  // HTMLタグが1つでも含まれていればAI変換
  if (!htmlTagRegex.test(raw)) return false;
  console.log(`\n[${filePath}] HTML構文を検出。ファイル全体をAIで変換します。`);
  const system = `次のMarkdownファイル全体に含まれるHTML構文をすべてGitHub Flavored Markdown (GFM)に変換してください。\n構文に関係しないコンテンツはそのまま改変せずに残してください。`;
  try {
    const { text: gfm } = await generateText({
      model: openai("gpt-4.1"),
      system,
      prompt,
    });
    console.log("↓ 変換結果 (GFM) の冒頭:");
    console.log(gfm.slice(0, 500)); // 先頭500文字だけ表示
    fs.writeFileSync(filePath, gfm, "utf-8");
    console.log(`\n変換完了: ${filePath}`);
    return true;
  } catch (err) {
    console.error("[ERROR] generateText失敗: ", err);
    return false;
  }
}

async function main() {
  const files = fs.readdirSync(WIKI_DIR).filter((f) => f.endsWith(".md"));
  const results = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(WIKI_DIR, file);
      return convertFile(filePath);
    })
  );
  if (!results.some(Boolean)) {
    console.log("HTML構文が含まれるファイルはありませんでした。");
  }
}

main().catch(console.error);
