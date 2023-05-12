---
title: Multipass関連のトラブル
---

# Multipass 関連のトラブル
---
**目次**
- [(1) Multipass が起動しない](#1)
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