これはコンテンツを内包するレポジトリです。
ディレクトリ内にあるファイルを外部に公開するためのものです。

## ディレクトリ構造

### コンテンツが格納されるディレクトリ

`/content` - コンテンツディレクトリ
`/content/images` - 画像コンテンツ
`/category` - カテゴリディレクトリ
`/content/wiki` - Wikiコンテンツ

## ファイル構造

### `/content/categories/[category_id].json`

- カテゴリ情報を格納するJSONファイル

```
{
  "title": "イベント",
  "slug": "event",
  "body": "もりのパーティで開催予定/開催されたイベント情報です。"
}
```

### `/content/images/[image_name].png`

- 画像コンテンツ

### `/content/wiki/[wiki_slug].json`

```
{
  "date": "2020-05-20T08:24:18.520Z",
  "title": "タイトル",
  "slug": "slug",
  "description": "説明",
  "body": "mdが入ります",
  "category": "アーカイブ",
  "image": "2020-05-20_18.30.12.png"
}
```
