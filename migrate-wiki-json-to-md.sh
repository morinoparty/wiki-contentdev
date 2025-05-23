#!/bin/zsh
# migrate-wiki-json-to-frontmatter-md.sh
# /content/wiki/*.json → .md（中身はjsonのまま）→ frontmatter形式md
# コミットログはまとめて管理

set -e

WIKI_JSON_DIR="./content/wiki"

# 1. json → md（リネームのみ、中身はjsonのまま）
for jsonfile in "$WIKI_JSON_DIR"/*.json; do
  slug=$(jq -r '.slug // empty' "$jsonfile")
  if [[ -z "$slug" ]]; then
    slug=$(basename "$jsonfile" .json)
  fi
  mdfile="$WIKI_JSON_DIR/$slug.md"
  git mv "$jsonfile" "$mdfile"
done

# 2. frontmatter形式mdに変換
pnpm exec tsx ./src/convert-wiki-json-to-md.ts

# 3. 変換後のmdファイルをgit管理下に追加（コミットはしない）
git add "$WIKI_JSON_DIR"/*.md
