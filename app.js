//在koa2中 导入的是一个class 因此用大写的Koa表示
const Koa = require("koa");
const http = require("http")
const bodyParser = require('koa-bodyparser');
const MongoClient  = require("mongodb").MongoClient;


// 引入router 注意require('koa-router')返回的是函数:
const router = require("koa-router")();

//创建一个koa对象来表示web app本身。
const app = new Koa();


//log 请求url
app.use(async (ctx,next)=>{
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
})
app.use(bodyParser())

router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
      <form action="/signin" method="post">
          <p>Name: <input name="name" value="koa"></p>
          <p>Password: <input name="password" type="password"></p>
          <p><input type="submit" value="Submit"></p>
      </form>`;
});

router.post('/signin', async (ctx, next) => {
  let name = ctx.request.body.name || '';
  let password = ctx.request.body.password || '';
  console.log(`signin with name: ${name}, password: ${password}`);
  if (name === 'koa' && password === '12345') {
      ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
  } else {
      ctx.response.body = `<h1>Login failed!</h1>
      <p><a href="/">Try again</a></p>`;
  }
});


MongoClient.connect("mongodb://localhost:27017/liux",function(err,db){
  if(!err){
      db.collection("col").insert({"a":1},function(err,result){
          if(!err){
              console.log(result);
          }
      })
  }
}) 

//app 使用 router 中间件

app.use(router.routes());


app.listen(8080);

console.log("app started at port 8080...");