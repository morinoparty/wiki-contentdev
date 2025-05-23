---
date: '2020-04-19T03:48:27.644Z'
title: wiki編集練習ページ
slug: practice
description: 文字通りの練習ページ、らくがきちょー
category: 投稿
---
覚書

<pre><code>&lt;a id=&quot;XXXX&quot;&gt; text &lt;/a&gt; </code></pre>= aタグ作成( id名 に # 使わない)  ( href は きかない？)

\[BBBB](#XXXX)  

markdown で ----  = 水平線

文章中に  <pre><code>&lt;span style=&quot;color: XXX&quot;&gt; text &lt;/span&gt;</code></pre>で文字色変更  

color:XXXの部分は red 、 blue 、 yellow …等[](http://www.netyasun.com/home/color.html)

[参照](http://www.netyasun.com/home/color.html)

<pre><code>&lt;span style=&quot;background:XXX; color:X;&quot;&gt;背景色＋文字色&lt;/span&gt;</code></pre>

<pre><code>&lt;p style=&quot;border: 4px solid XXX;&quot;&gt;枠線の色&lt;/p&gt;</code></pre>

中央揃え =  <pre><code>&lt;center&gt; 文章 &lt;/center&gt; </code></pre>

左揃え = <pre><code>&lt;div align=&quot;right&quot;&gt; 文章 &lt;/div&gt;</code></pre>

- - -

以下テスト

[[toc]]


## テスト

ああ

<br>

### テスト

ああ

<br>

<dl>
  <dt>リンゴ</dt>
  <dd>赤いフルーツ</dd>
  <dt>オレンジ</dt>
  <dd>橙色のフルーツ</dd>
</dl>

<strong><span style="font-family:'Helvetica'">HelveticaStandard</span></strong>

<span style="font-family:'ＭＳ 明朝'">もりのパーティー</span>

これは<span style="color: red; ">赤文字</span>です

これは<span style="color: #0000FF; ">青文字</span>です

これは<span style="color: rgb(0%,50%,0%);">緑文字</span>です

<span style="background:yellow; color:#F0F;">背景色＋文字色</span>

<p style="border: 4px solid #0F0;">枠線の色</p>

<div style="border: 4px solid #0F0;">

複数行も<br/>可能!

</div>

この部分は左端から

<center>この部分は中央に</center>

<div align="right">この部分は右端から</div>

 ~~取り消し線~~ #98FB98

<body>
 <table border="5" bordercolor="#98FB98
">
    <tr>
      <th>名前</th>
      <th bgcolor="green">年齢</th>
    </tr>
    <tr>
      <td>田中</td>
      <td>27</td>
    </tr>
    <tr>
      <td bgcolor="orange">佐藤</td>
      <td>42</td>
    </tr>
　　　<tr bgcolor="pink">
      <td>太郎</td>
      <td>40</td>
    </tr>
  </table>
</body>

<i class="fas fa-arrow-alt-circle-left"></i>

<center>
<body>
 <table border="10"bordercolor="#32CD32">
    <tr>
      <th bgcolor="#32CD32"> </th>
      <th> <i class="fas fa-arrow-alt-circle-up"></i> </th>
      <th><center><span style="color: gray; ">test</span></center></th>
      <th> <i class="fas fa-arrow-alt-circle-up"></i> </th>
      <th bgcolor="#32CD32"> </th>
    </tr>
    <tr>
      <th><center><span style="color: gray; ">test</span></center></th>
      <th> <i class="fas fa-arrow-alt-circle-left"></i> </th>
      <th><center> <i class="fas fa-angle-right"></i> test <i class="fas fa-angle-left"></i> </center></th>
      <th> <i class="fas fa-arrow-alt-circle-right"></i> </th>
      <th><center><span style="color: gray; ">test</span></center></th>
    </tr>
    <tr>
      <th bgcolor="#32CD32"> </th>
      <th> <i class="fas fa-arrow-alt-circle-down"></i> </th>
      <th><center><span style="color: gray; ">test</span></center></th>
      <th> <i class="fas fa-arrow-alt-circle-down"></i> </th>
      <th bgcolor="#32CD32"> </th>
    </tr>
  </table>
</body>
</center>

<center>
<body>
 <table border=""bordercolor="#32CD32">
    <tr>
      <th bgcolor="#32CD32"> </th>
      <th> <i class="fas fa-arrow-alt-circle-up"></i> </th>
      <th><center><span style="color: gray; ">test</span></center></th>
      <th> <i class="fas fa-arrow-alt-circle-up"></i> </th>
      <th bgcolor="#32CD32"> </th>
    </tr>
    <tr>
      <th><center><span style="color: gray; ">test</span></center></th>
      <th> <i class="fas fa-arrow-alt-circle-left"></i> </th>
      <th><center> <i class="fas fa-angle-right"></i> test <i class="fas fa-angle-left"></i> </center></th>
      <th> <i class="fas fa-arrow-alt-circle-right"></i> </th>
      <th><center><span style="color: gray; ">test</span></center></th>
    </tr>
    <tr>
      <th bgcolor="#32CD32"> </th>
      <th> <i class="fas fa-arrow-alt-circle-down"></i> </th>
      <th><center><span style="color: gray; ">test</span></center></th>
      <th> <i class="fas fa-arrow-alt-circle-down"></i> </th>
      <th bgcolor="#32CD32"> </th>
    </tr>
  </table>
</body>
</center>

* タスク1
* タスク2

:smile:

:+1:

<html lang="jp">
  <head>
    <meta charset="UTF-8"/>
    <title>テスト</title>

<link rel="stylesheet" href="/jslib/Leaflet/leaflet.css" />
<script type="text/javascript" src="/jslib/Leaflet/leaflet.js"></script>

<script type="text/javascript" src="/js/jquery.min.js"></script>

<script type="text/javascript" src="/jslib/jquery-ui/jquery-ui.min.js"></script>

<script type="text/javascript" src="/jslib/imgViewer2-master/dist/imgViewer2.min.js"></script>

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes" />
<style>
 body { overflow: hidden; }
</style>

  </head>
  <body>
    <img  id="image1" src="/img/もりパ路線図.png" style="width: 100vw; height: 100vh;" />

<script type="text/javascript">
 ;(function($) {
   $(document).ready(function() {
     var $img = $("#image1").imgViewer2({
       zoomMax: 8,
       zoomable: true,
       dragable: true,
       zoomStep: 0.2,
       onReady: function() {
         this.setZoom(4.0).panTo(0.3,0.4);
       },
       onClick: function( e, pos ) {
         $("#position").html("relx: " + pos.x + " rely: " + pos.y + " zoom: " + this.getZoom() );
       }
     });
   });
 })(jQuery);
</script>

  </body>
</html>
↓

<!--StartFragment-->

<a id="aaa"><h1>タイトル</h1></a>

<br>

↑タイトル

<!--EndFragment-->

<!--StartFragment-->

<a href="#aaa">タイトルの位置へジャンプする</a>

<!--EndFragment-->

# 見出し1

\#見出し1

- - -

* [Goto 2](#2)

## \[test]

\[test2] 

\[test3]

## \[見出しb]

\[link text]

### 2

* [目次](#index)
* [目次](#test1)
* [第1章](#anchor1)
* [第2章](#anchor2)

[見出し1へ](#見出し1) 

> あ

~~い~~

> う
>
> > えお

か[^1](ららら)

`rgb(255,0,0)` あああ

さ

し

す

せ

そ

<details><summary>クリックすると展開されます</summary><div>

あ
い
う

</div>

</details>\
\
\
↑\
↑

-﻿ - -

# テーブル markdown 形式

| No  | 都道府県 |       人口 | 市町村数 |
| :-: | -------- | ---------: | -------: |
|  1  | 東京都   | 13,942,856 |       39 |
|  2  | 神奈川県 |  9,200,166 |       33 |
|  3  | 大阪府   |  8,823,453 |       43 |
|  4  | 愛知県   |  7,552,873 |       54 |
|  5  | 埼玉県   |  7,337,330 |       63 |

# テーブル table タグ形式

<table border="4" bordercolor="#aaaaaa">
	<thead>
		<tr>
			<td>No</td>
			<td>都道府県</td>
			<td>人口</td>
			<td>市町村数</td>
		</tr>
	</thead>
	<tr>
		<td>1</td>
		<td>東京都</td>
		<td>13,942,856</td>
		<td>39</td>
	</tr>
	<tr>
		<td>2</td>
		<td>神奈川県</td>
		<td>9,200,166</td>
		<td>33</td>
	</tr>
	<tr>
		<td>3</td>
		<td>大阪府</td>
		<td>8,823,453</td>
		<td>43</td>
	</tr>
	<tr>
		<td>4</td>
		<td>愛知県</td>
		<td>7,552,873</td>
		<td>54</td>
	</tr>
	<tr>
		<td>5</td>
		<td>埼玉県</td>
		<td>7,337,330</td>
		<td>63</td>
	</tr>
</table>


執筆者:○○

最終更新:○○
