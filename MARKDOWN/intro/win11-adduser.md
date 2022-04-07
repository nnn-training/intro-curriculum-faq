---
title: Windows 11での新規アカウント作成
---

# Windows 10での新規アカウント作成

このページは、アカウント名（ユーザー名）に日本語などが含まれているために Vagrant のインストール時にトラブルが発生した方向けに、Windows 10での新しいアカウント作成手順を解説したものです。

### 新規アカウントの作成

#### 1. 設定画面を開く

スタートメニューを右クリックし、表示されたメニューの中から 「設定」をクリックします。

<div class="image-with-caption">
  <img src="image/win10-adduser-01.png">
  <span class="imagecaption screenshot"></span>
</div>


#### 2. アカウント設定画面を開く

「アカウント」をクリックします。（なお、この画面では左下に表示されていますが、ウィンドウのサイズによって「アカウント」が表示される位置は異なる場合があります。）
<div class="image-with-caption">
  <img src="image/win10-adduser-02.png">
  <span class="imagecaption screenshot"></span>
</div>

#### 3. ユーザを作成する

アカウント設定の画面に切り替わったら、左側のメニューから 「他のユーザー」をクリックします。
続いて、「その他のユーザーをこの PC に追加」をクリックします。

<div class="image-with-caption">
  <img src="image/win10-adduser-03.png">
  <span class="imagecaption screenshot"></span>
</div>

新しく開いたウィンドウで「**このユーザーのサインイン情報がありません**」をクリックします。

<div class="image-with-caption">
  <img src="image/win10-adduser-04.png">
  <span class="imagecaption screenshot"></span>
</div>


「**Microsoftアカウントを持たないユーザーを追加する**」をクリックします。

<div class="image-with-caption">
  <img src="image/win10-adduser-05.png">
  <span class="imagecaption screenshot"></span>
</div>

「このPCを使うのはだれですか？」の欄に**すべて半角英数字**で新しいアカウントの名前を入力します。
また、新しいアカウントで使うパスワードを入力します。

<div class="image-with-caption">
  <img src="image/win10-adduser-06.png">
  <span class="imagecaption screenshot"></span>
</div>

続いて、スクロールして「パスワードを忘れた場合」の欄には、パスワードを忘れた場合の質問を入力します。<br>
以下の画像はあくまで記入例なので、自分がきちんと思い出せるものを入力してください。
入力が完了したら、「次へ」をクリックします。

<div class="image-with-caption">
  <img src="image/win10-adduser-07.png">
  <span class="imagecaption screenshot"></span>
</div>

元の画面に戻ったら、新しいアカウントが表示されているはずです。<br>
このアカウントの名前の部分をクリックしてください。すると、「**アカウントの種類を変更**」というボタンが出てくるので、そのボタンをクリックします。

<div class="image-with-caption">
  <img src="image/win10-adduser-08.png">
  <span class="imagecaption screenshot"></span>
</div>

アカウントの種類を「**管理者**」に変更し、「**OK**」をクリックします。

<div class="image-with-caption">
  <img src="image/win10-adduser-09.png">
  <span class="imagecaption screenshot"></span>
</div>

「**管理者 - ローカルアカウント**」となっていることを確認したら、設定画面を閉じます。

<div class="image-with-caption">
  <img src="image/win10-adduser-10.png">
  <span class="imagecaption screenshot"></span>
</div>

### 新しいアカウントへのログイン

現在のアカウントをログアウトします。（もし作業中のデータがあればすべて保存しておいてください。）<br>
スタートボタンをクリックし、丸い人のマークのアイコンをクリックします。<br>
続いて「サインアウト」をクリックします。

すると、パソコン起動時と同じような画面が現れるので、左下に表示される新しく作成したアカウントをクリックし、パスワードを入力してログインします。<br>
以後、入門コースはそのアカウントで学習を進めてください。

<div class="image-with-caption">
  <img src="image/win10-adduser-11.png">
  <span class="imagecaption screenshot"></span>
</div>


### 新しいアカウントでの環境構築

第 1 章では

- Google Chrome のインストール
- VS Code のインストール
- ファイル拡張子の表示

を行いました。このうち、 VS Code のインストールと、ファイル拡張子の表示に関しては新しいアカウントでも別途設定が必要です。<br>
入門コース第 1 章を参考に、再度設定してください。