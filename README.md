# FAQ・トラブルシューティング

**<https://nnn-training.github.io/faq>**

こちらは、[ZEN Study プログラミングコース FAQ・トラブルシューティング](https://nnn-training.github.io/faq)の GitHub リポジトリです。<br>

（[2020 年度以前のトラブルシューティング](https://progedu.github.io/intro-curriculum-faq)のリポジトリは、[こちら](https://github.com/progedu/intro-curriculum-faq)です。）

## ライセンス

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />このサイトの表示内容、および `MARKDOWN/` 配下の記事は <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><strong>クリエイティブ・コモンズ 表示 - 継承 4.0 国際 ライセンス</strong></a>の下に提供されています。<br>
`MARKDOWN/` 配下を除くソースコードのライセンスは **MIT** **ライセンス**です。

## ざっくり概要

`/MARKDOWN/` フォルダ配下のマークダウンファイルを編集するだけで、自動的にページと目次が作成されます。

このリポジトリは、どなたでもプルリクエストを提出することができます。
リポジトリをフォークして、マークダウンファイルを編集したのち、プルリクエストを送ってください。

## プルリクエストの出し方

### マークダウンで編集するだけ

このサイトのページは、**マークダウン**と呼ばれる形式で、簡潔に編集することができます。
マークダウンで編集し、`main` ブランチにマージするだけで、**自動的に**ページと目次が作成されるようになっています。 <br>
このサイトそのものの機能を改修する場合を除いて、**`/MARKDOWN/` フォルダ以外のファイルを編集する必要はありません**（画像を追加する場合は後述）。

### マークダウン形式の書き方

マークダウン形式のファイル拡張子は `.md` です。 マークダウン形式では、例えば

```
# 見出し大
## 見出し中
### 見出し小
- 箇条書き a
- 箇条書き b
**太字** 
```

などのように書くことで、簡潔に構造化された文書を記述することができます。
詳しい書き方は、検索サイトで調べてみてください。

### メタ情報の書き方

このサイトでは、マークダウン形式のファイルの冒頭に

```
---
title: サンプルタイトル
---
# サンプルタイトル

（後略）
```

のように書くことで、ファイルのメタ情報を記述できます。
**この `title`は、目次のタイトルになりますので、必ず記述してください。**

### 画像の追加方法

画像の追加は、`MARKDOWN/{course}/images` フォルダの中に置いてください。

例えば、

```
MARKDOWN/intro/images/a.png
```

という画像を追加したときは、マークダウンで

```
![代替テキスト](./images/a.png)
```

のように書くことで表示されます。

## このサイトの構成

このサイトは Next.js + TypeScript で実装されています。
サイトそのものの機能を改修するとき以外、Next.js や TypeScript の知識は必要ありません。

### ディレクトリ構成

```
/
　├ MARKDOWN/    # ここを編集します
　│　 　├ ...
　│  └ ...
　│
　├ public/ 
　│  └ /images   # MARKDOWN/{course}/images の画像が出力されます（変更不要）
　│
　├ src/ 
　│  └ ...       # Next.js アプリの実装です（変更不要）
　│
　└ ...          # 各種設定ファイルです（変更不要）
```

## デプロイの仕組み

このリポジトリの `main` ブランチに変更がマージされると、GitHub Actions によって自動的に Next.js アプリのビルドが開始されます。
ビルド時に、マークダウンファイルは HTML 形式に変換されます。さらに、マークダウンのフォルダ構成から、自動的に目次が作成されます。
ビルド後は、GitHub Pages で表示可能な形にアプリケーションが export され、最終的に `gh-pages` ブランチに格納されることで、GitHub Pages にデプロイされます。

## ローカル環境でこのサイトを表示するには

サイトの表示をお手元の環境で確認することができます。
この作業は、プルリクエストに必須ではありません（ただし、`MARKDOWN/` 配下以外を改修するときは必ず確認してください）。
2 つの方法があります。

1. Docker を利用する方法
2. ローカルの Node.js 環境を利用する方法

### 1. Docker を利用する方法

お使いの PC（Windows または Mac）に Docker Desktop がインストールされている必要があります。
このリポジトリをフォークして、クローンします。

```bash
cd 作業ディレクトリ
git clone git@github.com:nnn-training/faq.git
cd faq
```

`docker compose` を利用してコンテナを起動します。

```bash
docker compose up
```

### 2. ローカルの Node.js を利用する方法

お使いの PC に、Node.js および Yarn がインストールされている必要があります。
このリポジトリをフォークして、クローンします。

```bash
cd 作業ディレクトリ
git clone git@github.com:nnn-training/faq.git
cd faq
```

Yarn を利用して Next.js アプリを起動します。
推奨される Node.js のバージョンは　v18.18.2 及び v20.9.0 です。

```bash
yarn install
yarn dev
```
