var http = require('http'),
    wechat = require('node-wechat');
var PORT = 3030;
wechat.token = 'your_token';

http.createServer(function (req, res) {
  //检验 token
  wechat.checkSignature(req, res);
  //预处理
  wechat.handler(req, res);

  //链式监听
  wechat.text(function (data) {
    // TODO
  }).image(function (data) {
    // TODO
  }).location(function (data) {
    // TODO
  }).link(function (data) {
    // TODO
  }).event(function (data) {
    // TODO
  }).voice(function (data) {
    // TODO
  }).video(function (data) {
    // TODO
  }).all(function (data) {
    var msg = {
      FromUserName : data.ToUserName,
      ToUserName : data.FromUserName,
      //MsgType : "news",
      Articles : ""
    }
    wechat.send(msg);
  });

}).listen(PORT,"127.0.0.1",function(){
    console.log('http server is started on port'+PORT)
});