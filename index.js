/*  MonHu Discord.js
MonitorHumanが作った、簡単にDiscordのBotを作成するNPMモジュール
create by MonHu  */

//  ガイドのフォーマット
//タイトル
/*  ガイド内容 */

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const cron = require("node-cron");

function sleep(waitSec, callback) {
    setTimeout(callback, waitSec);
};

//準備が完了した際に、実行する物
/*  ガイド  */
client.on("ready", () => {
    console.log(`${client.user.tag}として、準備が完了しました。\nBotをご利用いただけます。`);
    cron.schedule("0 * * * * *", () => {
        client.user.setPresence({
            activity: {
                name:
                    `${client.guilds.cache.size}サーバー ${client.users.cache.size}メンバー ${client.ws.ping}ms | API作成: MonHu`
            },
            status: "online"
        });
    });
});

//メッセージの応答の設定
/*  ガイド
mondjs.config("設定したjsonファイル", "オプションでフォーマット(デフォルトでutf8)");
*/
exports.config = function (cnfg, cnfgf) {
    const configmsg = JSON.parse(fs.readFileSync(cnfg, cnfgf == null ? "utf8" : cnfgf));
    client.on("message", message => {
        if (message.author.id == client.user.id) return;
        Object.keys(configmsg).forEach(function (key) {
            if (message.content == key) message.channel.send(configmsg[key].replace(/{ping}/g, client.ws.ping))
        });
    })
};

//トークンでログイン
/* ガイド
mondjs.login('トークン');
↑のを使用してください。
*/
exports.login = function (token) {
    return client.login(token);
};