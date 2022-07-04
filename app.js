
const request = require("request");
const dotenv = require("dotenv").config();


//Node.js プログラムから、コマンドライン引数を取得するには、process.argv プロパティを参照します。
//process モジュールはデフォルトで使用できるようになっている
const argv = process.argv[2];



const options = {
// APIキーを別のファイルで管理する
url: `https://api.openweathermap.org/data/2.5/weather?q=${argv}&units=metric&appid=${process.env.API_KEY}`,
method: "GET",
// みやすいようにJSON形式にする
json: "true",
}
request(options, (error, res, body) =>{
  console.log(body.main.temp);
});
//Node.js プログラムから、コマンドライン引数を取得するには、process.argv プロパティを参照します。
//process モジュールはデフォルトで使用できるようになっている
