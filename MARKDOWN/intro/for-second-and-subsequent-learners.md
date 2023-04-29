---
title: 2週目以降の学習者向け
---

# 2週目以降の学習者向け

---
**目次**
- [(1) 【Git】リポジトリの削除](#1)
- [(2) 【Windows 10】Hyper-Vを有効/無効にする方法](#2)
---

# リポジトリの削除 <a id="1"></a>

GitHubでは、1 つのリポジトリに対するフォークは一度しかできません。  
2回フォークをしようとすると、(fork already exists)と表示されてフォークができません。
教材をやり直すためなどに、2回目のフォークをしたい場合は、既存のリポジトリを削除する必要があります。

削除したいリポジトリの **Settings** を開きます。

![Settingsをクリック](/faq/images/intro/delete_repository_01.png) 

スクロールして一番下の **Danger Zone** の **Delete this repository** をクリックします。

![Danger Zone の Delete this repository をクリック](/faq/images/intro/delete_repository_02.png) 

**Are you absolutely sure?** (訳：本当によろしいですか？)と表示されたら、 **please type** の後に表示されている太字の箇所を下の入力窓に入力します（コピーしても構いません）。  
この画面では一度消したら元には戻せないこと、リポジトリ内の Wiki や issues なども全て削除され、コラボレータも外される旨が書かれています。

![Please type の横の文字を入力](/faq/images/intro/delete_repository_03.png) 

入力したら、下の **I understand the consequences, delete this repository** (訳：この作業をしたらどうなるかを理解しました、削除します)をクリックします。

![Danger Zone の Delete this repository をクリック](/faq/images/intro/delete_repository_04.png) 

削除すると認証ページに移るので認証が終わると、`Your repository "あなたのユーザ名/リポジトリ名" was successfuly deleted.` と表示されています。  
これでリポジトリの削除ができました。

![削除は成功しました](/faq/images/intro/delete_repository_05.png) 


# 【Windows 10】Hyper-Vを有効/無効にする方法 <a id="2"></a>

### （プログラミング経験者向け）VT-X を利用する仮想化アプリケーション  

プログラミング経験者の方などで、VT-X を利用する仮想化アプリケーション（Android エミュレータなどを含む）を導入している場合、第 2 章で構築する環境ではうまく動作しない可能性があります。  
Docker では、仮想化機能に Hyper-V を利用していますが、Hyper-V は VT-X を占有してしまいます。  
そのため、他のアプリケーションからは VT-X が利用できなくなってしまうのです。  
もし、VT-X を利用するアプリケーションを使用したい場合は、Hyper-V を一時的に無効にして、作業終了後に Hyper-V を有効に戻してあげる必要があります。  

- [・Hyper-V を無効にするにはどのような操作をすればよいでしょうか](https://www.nnn.ed.nico/questions/17885)

