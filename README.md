# Takao Tsumuraya — Academic Website

圓谷貴夫先生の研究者ウェブサイトです。外部ライブラリを使わない静的サイトで、GitHub Pagesにそのまま公開できます。

## ローカルで確認

`index.html`をブラウザで開くか、このフォルダで次を実行します。

```sh
python3 -m http.server 8000
```

その後、`http://localhost:8000`を開きます。

## GitHub Pagesで公開

1. GitHubで新しい公開リポジトリを作成します。個人サイトにする場合の名前は `<GitHubユーザー名>.github.io` です。
2. このフォルダのファイルをリポジトリへ追加してpushします。
3. リポジトリの **Settings → Pages** を開きます。
4. **Deploy from a branch**、ブランチ **main**、フォルダ **/(root)** を選んで保存します。

通常は数分後に公開されます。

## 主な編集箇所

- 本文・論文・リンク: `index.html`
- 配色・レイアウト: `styles.css`
- 日英切り替え: `script.js`

掲載情報はResearchmapの公開プロフィールをもとにした初稿です。公開前に表記、所属、論文の選定をご確認ください。
