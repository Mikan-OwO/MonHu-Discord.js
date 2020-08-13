# MonHu-Discord.js
MonitorHumanが作った、簡単にDiscordのBotを作成するNPMモジュール

## 使い方
### Botの作成
#### Discordのアプリケーションを作成する。
Discordはアプリケーションの中にBotという形で存在します。
そのアプリケーションを作成して、Botを作ります。

[Discord Developer Portal](https://discord.com/developers/applications/) に行って、アプリケーションを作成します。
※すでにログインを済ませた状態で話を進めます。

アプリケーションを作成したら、Botを作成します。
Botを作成するには、画面左側のBotのタブを開き、Botを作成します。
このときに出来る、token(トークン)をメモ(PCで)をしておいてください。
メモが終わったら、画面左側のOAuth2のタブを開き、SCOPESのチェックのところのbotのみを押し招待リンクを生成してください。
その招待リンクを開き、導入したいサーバーに参加させてあげてください。
これで、Botの準備は完了!
### プログラムを書く
#### MonHu Discord.jsは非常に簡単に作られて、簡単にご利用いただけます。
まず、適当なフォルダを作成します。
その中に、`main.js`のJSファイルを用意します。
次に、`main.js`の中に、
```js
const mondjs = require("monhu-discordjs")

mondjs.config("./config.json")
mondjs.login("トークン")
```
を書きます。
`mondjs.login("トークン")`のトークンの部分に先程メモ等をしたトークンを貼り付けてください。
JSファイルの準備は完了!
次に、`config.json`を作成します。
中身は、
```json
{
    "受け取るメッセージ": "お返しするメッセージ",
    "こんにちは!": "こんにちは!!",
    "!ping": "Pong!\n{ping}msです。"
}
```
など、好きなことを書いておきましょう!
これでプログラムを書くのは完了です。
### 実行
実行するには、コマンドプロントかPowerShellを開き、先程作成したフォルダに行きます。
`cd ※先程のフォルダのパス`で移動できます。
移動したら、`node main.js`を実行しましょう。

コマンドプロント等に準備が出来ましたと言われます。
### 完了。
これでBotは動いてるはずです。
何か不備等がございましたら、[開発者がいるサーバー](https://discord.gg/2ZYRgxz)に行ってきましょう!

## サポート
このモジュールについては、[開発者がいるサーバー](https://discord.gg/2ZYRgxz)にご質問等をお願いいたします。

`MonHu Discord.jsのサポートがほしいです！`と言えば反応してくれます。


楽しいDiscord生活を。MonHuでした。