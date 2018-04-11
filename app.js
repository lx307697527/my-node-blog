var koa = require('koa');
var app = koa();



//错误处理
app.on('error', function(err,ctx){
  console.log(err);
});  
app.listen(3000)
// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:3000/');