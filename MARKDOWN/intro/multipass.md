---
title: Multipass関連のトラブル
---

# Multipass 関連のトラブル
---
**目次**
- [(1) Multipass が起動しない](#1)
- [(2) Microsoft Hyper-V が『Unavailable on Home edition」が選択できない](#2)
- [(3) 「指定されたファイルが見つかりません」というエラーが出る](#3)
- [(4) 「launch failed: The following errors occurred: Instance stopped while starting」というエラーが出る](#4)
---

## Multipass が起動しない <a id="1"></a>

Multipass を起動しようとしたときに、

```
launch failed: Available disk (2273054720 bytes) below minimum for this image (2361393152 bytes)
```

というエラーメッセージが出ることがあります。

これは、PC 中のディスク容量が少なくなっていることを表します。不要なファイルを削除してください。

昨年度版から引き続き入門コースに取り込んでいる場合は、**Docker イメージのキャッシュ**が原因でこのメッセージが出ることがあります。この場合は、

```
docker system prune --volumes
```

をお試しください。

## Microsoft Hyper-V が『Unavailable on Home edition」が選択できない <a id="2"></a>

[https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads) より VirtualBox をダウンロード・インストールし、『Oracle VM VirtualBox』を選択して受講を進めてください。

関連：[「Multipass のインストール」の節でまず、Microsoft Hyper-V が『Unavailable on Home edition」と書いてあり、選択できません](https://www.nnn.ed.nico/questions/29536)

## 「指定されたファイルが見つかりません」というエラーが出る <a id="3"></a>

仮想化環境が用意できていない可能性が高いです。

* ・VirtualBox をダウンロードし、インストールしているか確認してください。
  * ・していない場合は [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads) より ダウンロードしてインストールを済ませてください。

関連：[Ubuntu の起動がうまくいきませんでした。(指定されたファイルが見つかりません。と表示されました)](https://www.nnn.ed.nico/questions/29528)

## ~「launch failed: The following errors occurred: Instance stopped while starting」というエラーが出る~ <a id="4"></a>

### ※このエラーは6月6日に公開されたUbuntu イメージにおいて修正されました。※
もしこのようなエラーが出た際は折りたたんでありますのでこちらを参考にしてください。

<details><summary>対処法</summary><div>

お使いの環境がMacOSであるならUbuntu 22.04イメージのダウンロードに失敗している可能性が高いです。

まず、以下のコマンドを実行してVM インスタンスの状態を確認してください。

```
multipass list
```

もし、以下のような表示が出たらVM インスタンスの削除が必要です。
```
Name                    State             IPv4             Image
linux-stduy                 Starting          --               Ubuntu 22.04 LTS
```
上の表示ではなく、このような表示が出た人はVM インスタンスの削除は必要ありません。
```
No instances found.
```

VM インスタンスの削除には、以下のコマンドを一行ずつ実行してください。
```
multipass delete linux-study
multipass purge
```
再度以下のコマンドを実行してください。
```
multipass list
```
以下の表示が出たら問題はありません。
```
No instances found.
```

VM インスタンスの削除が完了したら、Ubuntu 22.04 のイメージのダウンロードを行います。
以下の二つのコマンドを実行してください。それぞれ少し時間がかかると思います。
```
curl -L -o /var/root/Library/Caches/multipassd/vault/images/jammy-20230602/ubuntu-22.04-server-cloudimg-amd64-vmlinuz-generic https://cloud-images.ubuntu.com/releases/jammy/release-20230602/unpacked/jammy-server-cloudimg-amd64-vmlinuz-generic
curl -L -o /var/root/Library/Caches/multipassd/vault/images/jammy-20230602/ubuntu-22.04-server-cloudimg-amd64-initrd-generic https://cloud-images.ubuntu.com/releases/jammy/release-20230602/unpacked/jammy-server-cloudimg-amd64-initrd-generic
```

以上が無事に成功したらVM インスタンスが起動できるようになっているはずです。実際に起動してみましょう。
以下のコマンドでVM インスタンスを起動してください。
```
multipass launch 22.04 --name linux-study
```
以下の表示が出れば起動できています。
```
Launched: linux-study
```

 </div></details>
