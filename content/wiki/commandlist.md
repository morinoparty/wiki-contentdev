---
date: '2021-04-20T13:03:28.894Z'
title: コマンド一覧
slug: commandlist
description: コマンドを覚えられないヒトは、このページを”ブックマーク”に追加してね。
category: チュートリアル
---
<a id="index"></a>
もりのパーティ！で使用可能なコマンド達です。なかよくしてね！

[[toc]]

# ◆　はじめに読もう！ページ案内　◆

* コマンドを覚えられないヒトは、このページを”ブックマーク”に追加してね。
* 一部のコマンドは生活・資源どちらかのサーバー限定で使用できます。注釈が書いてなければ、生活/資源どちらのサーバーでも使用可能です。
* テレポート系コマンドは資源サーバーのジ・エンドで使用できません。（※/rtpはジ・エンドでも使用出来ます）資源エンドから生活サーバーに戻るには、エンドゲートウェイポータル（ビームが出るやつ）を通過した後にサーバー移動コマンド（/main）を使用してください。
* 保護系のコマンドは生活サーバー限定で使用できます。（土地保護は生活サーバーでしか掛けられない為）
  <br>

## 日常生活・必須コマンド

<table border="4" bordercolor="#aaaaaa">
  <thead>
    <tr>
      <th width="35%">コマンド</th>
      <th width="65%">説明</th>
    </tr>
  </thead>
  <tbody>
　  <tr>
      <td>/msg <プレイヤー名> <メッセージ内容><br>(/tell, /t, /w, )</td>
      <td>指定プレイヤーにメッセージを送信します。/tellでも同じだよ。チャット欄のプレイヤー名をクリックすると入力の補助してくれるよ。<br>例) /t SteaveTanaka 秘密の話があるんだけど、聞いてくれる？ </td>
    </tr>
    <tr>
      <td>/money<br>(/balance)</td>
      <td>現在の所持どんぐりを自分のチャットに表示します。<br>Tabキーを押しても確認できます。</td>
    </tr>
    <tr>
      <td >/pay <プレイヤー名> <どんぐり量></td>
      <td>指定プレイヤーに指定個数のどんぐりを支払えます。<br>例) /pay SteaveTanaka 1500</td>
    </tr>
　  <tr>
      <td>/trade <プレイヤー名></td>
      <td>指定プレイヤーにトレードを申請します。相手が許可するとトレード画面が開きます。トレードではアイテム、どんぐり、経験値、保護ブロック数を取引出来ます。<br><a href="https://wiki.morino.party/howtotrade">トレードの説明ページはこちら</a></td>
    </tr>
　  <tr>
      <td>/shopfinder search <アイテム名><br>/shopfinder bookfind <エンチャント名></td>
      <td>ショップ位置を検索し距離順に表示します。/sf searchと短縮可能<br>例) /sf search ガラス、/sf bookfind swift_sneak<dt>生活サーバー限定。</dt></td>
    </tr>
    <tr>
      <td>/st <スタンプ名><br>(/stamp)</td>
      <td>自分の頭上に絵文字スタンプを表示させます。絵文字の種類を増やすには、投票チケットガチャで当たるルーレットチケットが必要です。以下の5種類は、初めから誰でも使えます。<br>/st !moripa_pink.png<br>/st :angry-face:<br>/st :cucumber:
<br>/st :sleeping-face:<br>/st :thinking-face:</td>
    </tr>
　  <tr>
      <td>/co i</td>
      <td><a href="https://wiki.morino.party/coreprotect/">ブロックの設置破壊/アイテム出入の履歴を確認</a>できるモードに切り替えます。もう一度同じコマンドを使うと元のモードに戻ります。</td>
    </tr>
　  <tr>
      <td>/clist</td>
      <td>よく使うコマンドの一覧を表示します。<dt>生活サーバー限定。</dt></td>
     </tr> 
    </tr>
      <td>/mf book</td>
      <td><a href="https://morino.party/feature/fishing">さかな図鑑</a>を開きます。今まで釣った魚の種類ごとに、数、大きさ等が記録されています。<dt>生活サーバー限定。</dt></td>
    </tr>
　  <tr>
      <td>/mf shop</td>
      <td><a href="https://morino.party/fishing/">生活サーバーで釣った魚</a>を売るためのショップ画面が表示されます。釣り竿を持った状態スニーク＋右クリックでも表示できます。<dt>生活サーバー限定。</dt></td>
    </tr>
　  <tr>
      <td>/mf top</td>
      <td>現在行われている<a href="https://morino.party/fishing/">釣り大会</a>のランキングを表示します。<dt>釣り大会開催時の生活サーバー限定。</dt></td>
    </tr>
　  <tr>
      <td>/spawn</td>
      <td>スポーン地点へ移動します。</td>
    </tr>
　  <tr>
      <td>/main<br>/res<br>/lobby</td>
      <td>サーバー移動コマンド。生活/資源サーバーの最後にプレイした地点、またはロビーに移動します。</td>
    </tr>
　  <tr>
      <td>/sethome <ホームの名前><br>/delhome <ホームの名前></td>
      <td>ホーム（拠点、テレポートポイント）を登録・削除できます。<a href="#sethome">詳しくはこちら！</a></td>
    </tr>
　  <tr>
      <td>/home <ホーム名></td>
      <td>登録したホーム拠点へ移動します。<dt>使用料300どんぐり</dt></td>
    </tr>
　  <tr>
      <td>/claimlist</td>
      <td>自分が所有するエリア保護のリストを、チャット欄に表示します。保護地の座標も表示されるのでど忘れしても安心。<dt>生活サーバー限定。</dt></td>
    </tr>
　  <tr>
      <td>/removeclaim</td>
      <td>現在立っている場所のエリア保護を削除します。木の棒で右クリックして、保護の確認をしてから使おう。<dt>生活サーバー限定。</dt></td>
    </tr>
　  <tr>
      <td>/buyclaimblocks <購入マス数><br>/sellclaimblocks <売却マス数></td>
      <td>土地を保護するために必要な、保護マス数を取引します。価格は購入が1マス1どんぐり、売却が1マス0.5どんぐりです。<dt>生活サーバー限定。</dt></td>
    </tr>
　  <tr>
      <td>/trapped</td>
      <td>保護された土地から抜け出し、近くの無保護地にテレポートします。閉じ込められた時に使おう。<dt>生活サーバー限定。</dt></td>
    </tr>
　  <tr>
      <td><s>/mobball list</s></td>
      <td>MOBを捕まえて好きな場所で召喚できる魔法のボール、で捕獲可能なMOBの一覧を表示します。</td>
    </tr>
  </tbody>
</table>
<br>
<div align="right"><a href="#index">目次に戻る</a></div>

## テレポート系

<b>資源サーバーのジ・エンドでは使用不可。（ただし/rtpはジ・エンドでも使用出来ます）</b>

<table border="4" bordercolor="#aaaaaa">
  <thead>
    <tr>
      <th width="25%">コマンド</th>
      <th width="75%">説明</th>
    </tr>
  </thead>
  <tbody>
　  <tr>
      <td>/main<br>/res<br>/lobby</td>
      <td>サーバー移動コマンド。生活/資源サーバーの最後にプレイした地点、またはロビーに移動します。</td>
    </tr>
　  <tr>
      <td>/spawn</td>
      <td>スポーン地点へ移動します。</td>
    </tr>
　  <tr>
      <td>/sethome <ホーム名><br>/delhome <ホーム名></td>
      <td>現在地をホーム拠点として登録します。ベッドで寝る事でも、"bed"という名前のホーム拠点がセーブされます。<dt>生活・資源どちらのサーバーでも使用可能です。</dt></td>
    </tr>
　  <tr>
      <td>/home <ホーム名></td>
      <td>登録したホーム拠点へ移動します。<dt>使用料300どんぐり</dt></td>
    </tr>
　  <tr>
      <td>/homes</td>
      <td>登録したホーム拠点のリストを表示します。<a href="#sethome">詳しくはこちら！</a></td>
    </tr>
　  <tr>
      <td>/tpa <プレイヤー名></td>
      <td>指定プレイヤーの場所へ、自分の移動をリクエストします。<dt>使用料300どんぐり</dt></td>
    </tr>
　  <tr>
      <td>/tpahere <プレイヤー名></td>
      <td>自分の場所へ、指定プレイヤーの移動をリクエストします。<dt>使用料300どんぐり</dt></td>
    </tr>
　  <tr>
      <td>/rtp</td>
      <td>ランダムな座標にテレポートします。ネザー、ジ・エンドでも使用可能。<dt>資源サーバー限定・使用料300どんぐり</dt></td>
    </tr>
  </tbody>
</table>
<br>
<div align="right"><a href="#index">目次に戻る</a></div>

## チャット系

2023年11月更新　使用プラグイン入れ替え（CarbonChat）

<table border="4" bordercolor="#aaaaaa">
  <thead>
    <tr>
      <th width="25%">コマンド</th>
      <th width="75%">説明</th>
    </tr>
  </thead>
  <tbody>
　  <tr>
      <td>/carbon help</td>
      <td> チャットプラグインのヘルプを開きます。利用可能なコマンド一覧と説明文を表示(説明文は未完成？）</td>
    </tr>
　  <tr>
      <td>/ch global<br>/ch near<br>/ch partychat</td>
      <td>/ch（/channel）：チャンネルを切り替えます。<br><br>【global】標準のチャンネル。全てのプレイヤーにチャットを送信できます<br>【near】近くだけのチャンネル。半径32ブロックの範囲内のプレイヤーにチャットを送信できます。発言時チャットネームの頭に「N」がつきます<br>【partychat】 パーティチャット内で発言できます<br>上記のコマンドを発動させた後にチャット欄でメッセージを打つと、それぞれのチャンネルにのみ発言が行われます。<br>切り替えが成功すれば、チャット欄に『メッセージを送信中global(,near, partychat)』と表示されます。<br>サーバーをロビー・生活・資源と移動しても、ログイン・ログアウトしても切替えない限りは有効です。<br>＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝<br>　　また、チャンネルを切替えずに該当チャンネルに送信したい場合は、”/ch partychat やあ！”で、パーティチャットのみに「やあ！」とおくられます。<br>このときのチャット欄表示は『（party:チャット名）MCID：やあ！　』です。<br></td>
    </tr>
　  <tr>
      <td>/t <プレイヤー名> <メッセージ内容><br>(/w /m /t /whisper /msg /tell)</td>
      <td>whisperコマンド（個人チャット）。指定プレイヤーにのみ見えるメッセージを送信します。以下のコマンドが同様の効果。<br>(/w /m /t /whisper /msg /tell)</td>
    </tr>
　  <tr>
      <td>/reply <メッセージ>　(/r)　<br>/conrtinue (/c) </td>
      <td>(/r) 最後にメッセージを【受信】したプレイヤーにメッセージを送信<br>(/c) 最後にメッセージを《送信》したプレイヤーにメッセージを送信<br>混線しがちな複数人との個チャのやりとりをしてるときにも便利！活用してみてください</td>
　　</tr>
　  <tr>
      <td>/party create <パーティー名><s>/party host</s></td>
      <td>パーティーを作成できます。1プレイヤーが作成できるグループは１つのみです</td>
　　</tr>
　  <tr>
      <td>/party invite <プレイヤー></td>
　  <td>パーティーにプレイヤーを招待する<a href="https://wiki.morino.party/chat_help/"><s>詳細はこちらで！！</s></a></td>
    </tr>
　　<tr>
      <td>/party accept <プレイヤー></td>
      <td>プレイヤーから受けた招待を承認します。<br>実際にはチャット欄に表示された招待先（パーティ名）をクリックするとこのコマンドが自動実行されます。<br>所属できるパーティチャットは１つのみのため、別チャットに入ってるときは『You must leave your current party first.』赤エラーがでます。</td>
    </tr>
　　<tr>
      <td>/party leave</td>
      <td>参加しているチャンネル（グループチャット）から退出します。<br>パーティチャンネルを作成する時や、招待を受け入れる際に、他のパーティチャットに加入したままだと『You must leave your current party first.（現在入っているパーティから離れてください）』<br>という赤文エラーが表示されますので、出たらこのコマンドを使用ください<br>また、自分が最後の1人の状態でleaveをすると、グループ自体が消滅します（Successfully disbanded party‘○○○’.</td>
    </tr>
　  <tr>
      <td>/party page (/party) <s>/party members</s></td>
      <td>参加しているチャンネルのパーティーメンバーを表示</td>
    </tr>
　  <tr>
      <td><s>/party kick <player></s></td>
      <td><s>パーティーからキックできます。</s>新プラグインにキック機能はありません</td>
     </tr>
　  <tr>
      <td><s>/party ban <player></s></td>
      <td><s>パーティーからBANできます。</s>新プラグインにban機能はありません</td>
     </tr>
　  <tr>
      <td><s>/party unban<player></s></td>
      <td><s>パーティーからBAN解除できます。</s></td>
     </tr>
　  <tr> 
      <td><s>/party chat</s></td>
      <td><s>パーティーチャットと全体チャットの切り替えができます。</s></td>
     </tr>
　  <tr>
   <td>/ignore <プレイヤー名>（/block）<br>/unignore <プレイヤー名></td>
      <td>/ignore（もしくは/block）で、指定プレイヤーのチャットを非表示（ブロック）します。別サーバーにいるプレイヤーのチャットは非表示にされません。<br>/unignoreでチャットを再表示します。（ブロックの解除）</td>
    </tr>
　  <tr>
      <td>/ignorelist</td>
      <td>チャットを非表示にしたプレイヤーのリストを、自分のチャット欄に表示します。</td>
    </tr>
　  <tr>
      <td><s>/mail send <プレイヤー名> <メッセージ内容><br>/mail read<br>/mail clear</s></td>
      <td>メールはオフラインのプレイヤーにも送る事が出来ます。メールは30日間保存されます。<br>「send」指定プレイヤーにメールを送信します。<br>「read」受信したメールのリストを表示します。<br>「clear」受信したメールを全て削除します。</td>
    </tr>
　<tr>
      <td>/join <チャンネル名><br>/leave <チャンネル名></td>
      <td>特定のチャンネルに参加します。このコマンドはプレイヤーが作成するパーティチャットへの参加・離脱には使えません。<br>公式の作成チャンネルがgloval（全体）とnear（近く）のみのため、現状使い道はあまりありません</td>
    </tr>
  </tbody>
</table>
<br>
<div align="right"><a href="#index">目次に戻る</a></div>

## エリア保護

<dt>生活サーバー限定。</dt>
<br>
”trust”とは”信頼”という意味です。むやみに土地の使用許可を出さず、相手をよく知り、慎重に考えてから使おう。\\\\\\\\\\\\\\\\\\\\\\*自己責任\\\\\\\\\\\\\\\\\\\\\\*。
<br>
<a href="https://wiki.morino.party/howtotrust">/trust、/containertrust、/accesstrust等についての解説ページはこちら。</a>

<table border="4" bordercolor="#aaaaaa">
  <thead>
    <tr>
      <th width="30%">コマンド</th>
      <th width="70%">説明</th>
    </tr>
  </thead>
  <tbody>
　  <tr>
      <td>/claimlist</td>
      <td>自分が所有するエリア保護のリストを、チャット欄に表示します。保護地の座標も表示されるのでど忘れしても安心。</td>
    </tr>
　  <tr>
      <td>/removeclaim</td>
      <td>現在立っている場所のエリア保護を削除します。木の棒で右クリックして、保護の確認をしてから使おう。</td>
    </tr>
　  <tr>
      <td>/trustlist</td>
      <td>エリア保護内でtrust系の許可状況を確認できます。</td>
    </tr>
　  <tr>
      <td>/accesstrust <プレイヤー名></td>
      <td>下位の保護共有コマンド。エリア保護内で『ボタン・レバー・ベッド・書見台』のアクセスを許可します。</td>
    </tr>
　  <tr>
      <td>/containertrust <プレイヤー名></td>
      <td>上位の保護共有コマンド。エリア保護内で『accesstrustの権限』に加えて『チェスト・かまど・動物など』へのアクセスも許可します。書見台の本やトロッコも設置できるようになります。</td>
    </tr>
　  <tr>
      <td>/trust <プレイヤー名></td>
      <td>最上位の保護共有コマンド。エリア保護内で『accesstrust、containertrustの権限』を含むほぼ全ての使用権を他プレイヤーに許可します。</td>
    </tr>
　  <tr>
      <td>/untrust <プレイヤー名><br>/untrust all</td>
      <td>trust系の許可を消去します。allを指定するとすべてのプレイヤーの許可を消去します。</td>
    </tr>
  </tbody>
</table>
<br>
<div align="right"><a href="#index">目次に戻る</a></div>

## ブロック保護

<dt>生活サーバー限定。</dt>

<table border="4" bordercolor="#aaaaaa">
  <thead>
    <tr>
      <th width="30%">コマンド</th>
      <th width="70%">説明</th>
    </tr>
  </thead>
  <tbody>
　  <tr>
      <td>/lock<br>/cprivate</td>
      <td>チェストやドア等をプライベートタイプで保護します。他のプレイヤーは、操作不可能になります。<a href="#lwc">詳しくはこちら！</a></td>
    </tr>
　  <tr>
      <td>/cdonation</td>
      <td>チェスト類をドネーションタイプで保護します。他のプレイヤーは、アイテム収納のみ可能になります。</td>
    </tr>
　  <tr>
      <td>/cmodify <プレイヤー名><br>/cmodify -<プレイヤー名></td>
      <td>ブロックの保護を他プレイヤーに許可します。プレイヤーIDに-（マイナス）を付けると許可を取り下げられます。</td>
    </tr>
　  <tr>
      <td>/cpassword <パスワード></td>
      <td>チェストやドア等をパスワードタイプで保護します。他のプレイヤーは、パスワードを解錠する事でアクセス可能になります。</td>
    </tr>
　  <tr>
      <td>/cunlock <パスワード></td>
      <td>チェストやドア等のパスワードを解錠します。解錠したプレイヤーは、ログアウトするまで保護されたブロックへのアクセスが許可されます。</td>
    </tr>
　  <tr>
      <td>/cmagnet on<br>/cmagnet off</td>
      <td>チェストに類に使用すること事で、周囲3ブロック以内のアイテムを自動的に収納します。</td>
    </tr>
　  <tr>
      <td>/cautoclose on<br>/cautoclose off</td>
      <td>ドア類に使用すること事で、3秒後に自動的に閉まるようになります。動力は不要です。</td>
    </tr>
　  <tr>
      <td>/credstone on<br>/credstone off</td>
      <td>ドア類に使用すること事で、レッドストーン動力に反応しなくなります。</td>
    </tr>
　  <tr>
      <td>/cremove</td>
      <td>チェストやドア等の保護を消去します。</td>
    </tr>
　  <tr>
      <td>/climits</td>
      <td>現在鍵をつけているチェストやドア等の総数を確認できます。</td>
    </tr>
　  <tr>
      <td>/cinfo</td>
      <td>チェストやドア等の保護状況を確認します。</td>
    </tr>
　  <tr>
      <td>/cpersist</td>
      <td>lockコマンド等の連打不要！c系のブロック保護コマンドを連続で使える状態になります。もう一度使うと通常状態に戻ります。以下、使用例<br>/cpersist → /clock → チェストAを左クリック → チェストBを左クリック → 樽Aを → 樽Bを → 樽Cを → /cpersist</td>
    </tr>
  </tbody>
</table>
<br>
<div align="right"><a href="#index">目次に戻る</a></div>

## ショップ系

<dt>生活サーバー限定。</dt>

<table border="4" bordercolor="#aaaaaa">
  <thead>
    <tr>
      <th width="25%">コマンド</th>
      <th width="75%">説明</th>
    </tr>
  </thead>
  <tbody>
　  <tr>
      <td>/shopfinder search <アイテム名><br>/shopfinder bookfind <エンチャント名></td>
      <td>ショップ位置を検索し距離順に表示します。/sf searchと短縮可能<br>例) /sf search ガラス、/sf bookfind swift_sneak</td>
    </tr>

<tr>
  <td>/shop create</td>
  <td>ショップを作ります。が、売りたいアイテム持ってぶんチェストを殴る方早いです。</td>
</tr>
<tr>
  <td>/shop remove</td>
  <td>見ているショップを削除します。ラージチェストの場合、看板が付いてる方を見ないとエラーになります。(筆者談)</td>
</tr>
<tr>
  <td>/shop removeall</td>
  <td>自分のショップを\\\\\\\\\\\\\\\\\\\\\*\\\\\\\\\\\\\\\\\\\\\*全部\\\\\\\\\\\\\\\\\\\\\*\\\\\\\\\\\\\\\\\\\\\*消します。ゆーてあんま使わん気がする。</td>
</tr>
<tr>
  <td>/shop staff list</td>
  <td>ショップをいじれる自分以外の人を表示します。</td>
</tr>
<tr>
  <td>/shop staff add <プレイヤー名></td>
  <td>ショップをいじれる自分以外の人を追加します。共同でのショップ経営に。</td>
</tr>
<tr>
  <td>/shop staff remove <プレイヤー名></td>
  <td>ショップをいじれる自分以外の人のリストからその人を除外します。</td>
</tr>

  </tbody>
</table>

## その他

<table border="4" bordercolor="#aaaaaa">
  <thead>
    <tr>
      <th width="25%">コマンド</th>
      <th width="75%">説明</th>
    </tr>
  </thead>
  <tbody>
　  <tr>
      <td>/hc toggle breed<br>/hc toggle stats</td>
      <td>breed：連続エサやり機能のON/OFFを切り替えます。<br>stats：馬のステータス表示機能のON/OFFを切り替えます。</td>
    </tr>
　  <tr>
      <td>/hc share <プレイヤー名></td>
      <td>馬などのMOBのステータスを他プレイヤーと共有できます。自慢の馬を披露しよう。</td>
    </tr>
　  <tr>
      <td>/map hide<br>/map show</td>
      <td><a href="https://morino.party/maps">ウェブマップ上</a>に表示される自分の位置情報を隠します。再表示したい場合はshowを使用します。<dt>生活サーバー限定。</dt></td>
    </tr>
　  <tr>
      <td>/givepet <プレイヤー名></td>
      <td>指定プレイヤーに手懐けたペットを譲渡できます。コマンド入力後にペットを右クリックする必要があります。</td>
    </tr>
　  <tr>
      <td>/afk</td>
      <td>離席状態になります。Tabキーを押した時に”離席中”と表示されるアレ。この状態の人に話しかけるのはムダかも。</td>
    </tr>
　  <tr>
      <td><s>/check</s></td>
      <td><s>立っている場所の<a href="https://minecraft.fandom.com/wiki/Block_entity/">ブロックエンティティ</a>の設置数を確認出来ます。<dt>生活サーバー限定。</dt></s></td>
    </tr>
　  <tr>
      <td>/sit</td>
      <td>その場に座ります。階段ブロックやハーフブロックは右クリックすることでも座ることが可能です。</td>
    </tr>
　  <tr>
      <td>/lay</td>
      <td>仰向けで寝転がります。寝息がうるさいです。</td>
    </tr>
　  <tr>
      <td>/crawl</td>
      <td>うつ伏せで寝転がります。シロクマに出会ったら使うといいかも。</td>
    </tr>
　  <tr>
      <td>/hat</td>
      <td>メインハンドに持っているアイテムを頭に装備します。インベントリから直接ドラッグ&ドロップする事でも装備することが可能です。</td>
    </tr>
　  <tr>
      <td>/vote</td>
      <td>もりパサーバーへの<a href="https://morino.party/vote">投票</a>数を表示します。</td>
    </tr>
　  <tr>
      <td>/votetop</td>
      <td>全プレイヤーの<a href="https://morino.party/vote">投票</a>数をランキング形式で表示します。</td>
    </tr>
　  <tr>
      <td>/music</td>
      <td>楽曲リスト表示します。曲を選ぶと音楽を楽しめます。<dt>ロビーサーバー限定。</dt></td>
    </tr>
　  <tr>
      <td>/chess challenge cpu cheso <white/black></td>
      <td>ロビーサーバーにあるチェス盤でCPUと対局できます。whiteを入力すると自分が先番（白駒）になります。テクスチャが反映されていないので、一色碁状態になってます。<dt>ロビーサーバー限定。</dt></td>
    </tr>
    <tr>
      <td><s>/moripay <プレイヤー名> <金額></s></td>
      <td>秘密の送金コマンド。payとは違うのだよ、payとは。</td>
    </tr>
  </tbody>
</table>
<br>

- - -

<br><br><br>

# ∬　もっと詳しく説明するよ　∬

<a id="sethome"></a>

## お家に飛びたい？じゃあホームセットしようよ。

お家を作ったら、どこからでも**飛んでいきたい**ですよね。そんな時に便利な**コマンド**を紹介します！
<br>

* #### お家をセットしたい

    **/sethome 家の名前**

    このコマンドを使った時**立っている場所**がスポーン場所になります。\
    お家をセットできる数は**ベット**も含め、**5か所**になります。(例外あり)
  <br>
* #### お家に飛びたい

    **/home**

    これを実行すると登録されている家の一覧が画面上に出ますので飛びたい家の名前の**羊毛**をクリックしてください。カウントダウンが終わると**テレポート**します。

    ※家に飛ぶには一回につき**300どんぐり**が必要になります。
  <br>
* #### お家を削除したい

    **/delhome 家の名前**

    家の登録を消せます。
  <br>

- - -

編集者：tututututu201

最終更新日：2021/06/01  <div align="right"><a href="#index">目次に戻る</a></div>

- - -

<a id="lwc"></a>

## ドア、チェスト系保護のアレこれ

チェスト、かまど、ドアなど、大切にしたいブロックはありますか？\
そんな大切なブロックを保護してくれるのがLWCプラグインです。

* ###### 両開きのドアを保護すると…

両開きのドア、欲しくないですか？\
ドアを両方とも保護すると、両開きのドアを作ることができます。

- - -

編集者：Genbuchan

最終更新日：2021/01/06

- - -

↓以下wiki編集用テンプレ↓

<a id="command2"></a>

## ○○コマンドの解説

このコマンドはこんな事が出来るよ。

* #### こんな時は？

こうする！

* #### 注意事項

  oh...
  lol...
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  ・・・。

<a href="#command2">こんな感じの文を埋め込む</a>と、aで挟んだ文章でページ内ジャンプを設定出来ます。

ジャンプ先の設定の仕方は、ジャンプ前と同じ名前のIDを付けてマーキングするだけです（a id= ～ /a　少し上にあるこんな感じのやつ）。この場合のIDというのはcommand2の部分を指します他のIDとかぶらないよう自分の好きなIDを付けよう。ジャンプ前のIDには”半角#”が必要ですので注意しましょう。

\- - - - - - - - - - - - - - - - - - - -

編集者：you, macaronipenguin_, ms0503, narumincho,

最終更新日：2025/4/15 トレードの説明ページリンク

- - -
