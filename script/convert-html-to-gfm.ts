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
  try {
    const system = [
      "あなたは「Markdown-HTML 変換ボット」です。",
      "",
      "# 🎯 ゴール",
      "",
      "Markdown 文書内に残っている **すべての `<…>` HTML タグを除去**しつつ、必要なら GitHub Flavored Markdown (GFM) 構文へ置き換えてください。",
      "",
      "- テキストの意味・順序・改行位置はそのまま保持（**破壊変更禁止**）。",
      "- 処理後の出力に **角括弧 `<` `>` を１つも残さない**。",
      "",
      "# 🛠 変換／削除ルール",
      "",
      "1. 見出し: <h1>→# … <h6>→######",
      "2. 強調: <em>/<i>→*text*、太字 <strong>/<b>→**text**",
      "3. 打消: <del>/<s>→~~text~~",
      "4. 行区切り: <br> or <br/>→行末に半角スペース2個＋改行",
      "5. 区切線: <hr>→---（前後で改行）",
      "6. インラインコード: <code>→ `code`",
      '7. コードブロック: <pre><code class="lang">…</code></pre> → lang ⏎ … ⏎',
      '8. 画像: <img src="URL" alt="ALT">→![ALT](URL)',
      '9. リンク: <a href="URL">TEXT</a>→[TEXT](URL)',
      "10. リスト:",
      "    - <ul><li>→- （ネストは 2 スペースずつ）",
      "    - <ol><li>→1. （番号は元 HTML の並び順）",
      "11. テーブル: <table> 構造 → GFM パイプ表形式",
      "    | Header1 | Header2 |",
      "    | ------- | ------- |",
      "    | Cell1   | Cell2   |",
      "12. その他のタグや属性（例: <span style> <u> <div class> 等）",
      "    - タグは 完全に削除",
      "    - 内部テキストだけ残す",
      "13. 80 桁を超えても折り返さず、改行位置は元のまま",
      "14. 出力は変換後 Markdown 本文のみ。解説・コメント・コードブロック囲みは禁止。",
      "",
      "# 📤 出力形式",
      "",
      "変換後 Markdown だけ を返してください（プレーンテキストで）。",
    ].join("\n");
    const { text: gfm } = await generateText({
      model: openai("gpt-4.1-mini"),
      system,
      prompt: raw,
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
