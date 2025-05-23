#!/bin/zsh
# migrate-wiki-json-to-frontmatter-md.sh
# /content/wiki/*.json → .md（中身はjsonのまま, slugに基づくファイル名）→ frontmatter形式md
# コミットログはまとめて管理

set -e

WIKI_JSON_DIR="./content/wiki"

# 1. json → md（slugをURLセーフにしてリネーム、中身はjsonのまま）
to_url_slug() {
  python3 -c "import sys, urllib.parse; s=sys.argv[1]; import unicodedata; s=unicodedata.normalize('NFKC', s); s=s.lower(); s=s.replace(' ', '-').replace('\u3000', '-'); import re; s=re.sub(r'-+', '-', s); s=s.strip('-'); print(urllib.parse.quote(s))" "$1"
}

for jsonfile in "$WIKI_JSON_DIR"/*.json; do
  slug=$(jq -r '.slug // empty' "$jsonfile")
  if [[ -z "$slug" ]]; then
    slug=$(basename "$jsonfile" .json)
  fi
  url_slug=$(to_url_slug "$slug")
  mdfile="$WIKI_JSON_DIR/$url_slug.md"
  # 既存mdがあれば削除
  if [ -f "$mdfile" ]; then
    rm "$mdfile"
  fi
  git mv "$jsonfile" "$mdfile"
done

git add "$WIKI_JSON_DIR"/*.md
git commit -m "migrate: json→mdリネーム（slug正規化）"

# 2. frontmatter形式mdに変換
pnpm exec tsx ./src/convert-wiki-json-to-md.ts

git add "$WIKI_JSON_DIR"/*.md
git commit -m "migrate: frontmatter形式mdへ変換（in-place）"
