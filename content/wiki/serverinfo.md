---
date: '2022-05-17T05:13:27.376Z'
title: サーバー仕様
slug: serverinfo
description: サーバーの仕様について説明します
category: archive
---
# 概要

もりのパーティ！では[Paper](https://papermc.io/)というサードパーティー製のマインクラフトサーバーソフトウェアを実行しています。バニラと比べてパフォーマンスが高く、プラグインの導入が可能になっています。故にバニラと相違がありますのでこのページで解説します。

## バニラとの違い

### MOBスポーン

マルチプレイヤーサーバーでは、MinecraftのMobスポーンの処理方法によってファーム(トラップタワー)の効率が極端に低下することがあります。Paperでは、この問題を軽減しようとしています。バニラではサーバー全体でMobのスポーン数が制御されており、１人のプレイヤーにMobのスポーンが偏る事があります。しかし、PaperではプレイヤーごとにMobのスポーン数が制御されています。

### チャンクローダー

Paperはチャンクの生成/読込が非常に高速です。

ポータルベースのファームは、バニラのシングルプレーヤーと同等の動作をするように変更されています。バニラのマルチプレイヤーではポータルの出口付近にプレイヤーがいないとMobはデスポーンしますが、もりぱではプラグインによってシングルプレイヤーと同等の動作をするように変更されています。
https://hangar.papermc.io/Kyle/Otherside/

### レッドストーン

Paperはより高速なアルゴリズムによってレッドストーン回路が処理されています。バニラの動作をほとんど維持しているはずですが、一部バニラと挙動が異なる可能性があります。

### 不具合修正

Paperは、有名なTNT/カーペット重複、岩盤とエンドポータルの破壊などのバニラに存在するグリッチをすべて修正します。

### ランダム修正

エンチャントテーブルなどの結果を予測が不可能です。

### X-RAY対策

X-RAYのMODやリソースパックを使った鉱石の透視が不可能です。空気に触れていないブロックはすべてフェイクブロックに置き換えられています。

<!--StartFragment-->

![](https://cdn.discordapp.com/attachments/576354121142108170/1209240770691862549/2024-02-20_05.44.19.png?ex=65ef6eba&is=65dcf9ba&hm=8dd3e722ca401acb2e29a2d219226ccd5d8ee1d49032ae21140ac85f37794260&)

<!--EndFragment-->

### 終わりに

その他にも細かな調整が施されていますがプレイヤーへの影響はないはずです。
バニラとの違いの詳細は以下のページをご覧ください
https://paper-chan.moe/paper/

## 導入プラグイン

導入しているプラグインの中でも、プレイヤーに関係のある一部をご紹介します。各種プラグイン名をクリックすることで詳細ページを開くことができます。

| プラグイン名                                                                                                                                       | 説明                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| [AdvancedPortals](https://modrinth.com/plugin/advanced-portals)                                                                              | ポータル作成(ユーザーは利用のみ)       |
| [CarbonChat](https://modrinth.com/plugin/carbon)                                                                                             | チャット制御                  |
| [ChestCleaner](https://www.spigotmc.org/resources/chestcleaner-sorting-plugin-api.40313/)                                                    | 鉄の桑でチェストを右クリックすると自動で整頓  |
| [CoreProtect](https://docs.coreprotect.net/)                                                                                                 | ブロックの破壊や設置ログを確認         |
| [CraftConomy3](https://github.com/pavog/craftconomy3)                                                                                        | 通貨の概念                   |
| [DecentHolograms](https://wiki.decentholograms.eu/)                                                                                          | ホログラム作成(ユーザーは利用のみ)      |
| [FancyHolograms](https://fancymcplugins.github.io/docs/fancyholograms.html)                                                                  | ホログラム作成(ユーザーは利用のみ)      |
| [GriefPrevention](https://docs.griefprevention.com/)                                                                                         | 自分の土地を主張できます            |
| [GSit](https://www.spigotmc.org/resources/gsit-modern-sit-seat-and-chair-lay-and-crawl-plugin-1-13-1-20-4.62325/)                            | いつでもどこでも座ったり寝転んだり       |
| [Hat](https://www.spigotmc.org/resources/hat.33980/)                                                                                         | アイテムをなんでも頭にかぶる          |
| [HuskSync](https://william278.net/project/husksync)                                                                                          | サーバー間のプレイヤーデータ同期        |
| [HuskHomes](https://william278.net/project/huskhomes)                                                                                        | テレポート制御                 |
| [HorseChecker](https://github.com/tyonakaisan/HorseChecker-v2)                                                                               | 馬のステータスを確認              |
| [Insights](https://www.spigotmc.org/resources/insights-super-configurable-region-limits-asynchronous-scans-1-19-2.56489/)                    | ブロック設置制御                |
| [MobBall](https://github.com/NamiUni/MobBall)                                                                                                | Mobを捕獲する                |
| [MoreFishRemake](https://github.com/NamiUni/MoreFishRemake-WIP)                                                                              | 魚釣りをもっと楽しく              |
| [LWC](https://www.spigotmc.org/resources/lwc-extended.69551/)                                                                                | ブロックの個別保護               |
| [PureTickets](https://github.com/broccolai/tickets/wiki)                                                                                     | 荒らしやバグの報告               |
| [PublicCrafters](https://github.com/BananaPuncher714/PublicCrafters)                                                                         | 作業台の共有や視覚化              |
| [PlasmoVoice](https://plasmovoice.com/)                                                                                                      | ボイスチャット                 |
| [QuickShopHikari](https://ghost-chu.github.io/QuickShop-Hikari-Documents/)                                                                   | プレイヤーとアイテムを取引する為のショップ   |
| [RaceAssist](<>)                                                                                                                             | 競馬をする事ができます。まだまだ開発途中    |
| [ShulkerPacks](https://www.spigotmc.org/resources/shulker-backpacks-1-13-1-19.67466/)                                                        | シュルカーボックスを地面に置かずに開けるように |
| [squaremap](https://modrinth.com/plugin/squaremap)                                                                                           | WEBマップ                  |
| [TradePlus](https://www.spigotmc.org/resources/trade-%E2%9C%B1-trade-items-money-tokens-protection-blocks-and-more-in-an-elegant-gui.23138/) | プレイヤー間でアイテムを取引          |
| [VotingPlugin](https://github.com/BenCodez/VotingPlugin/wiki)                                                                                | 投票報酬を獲得                 |
