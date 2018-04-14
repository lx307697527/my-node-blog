
const Koa = require('koa');
const app = new Koa();
const path = require('path');
const static = require('koa-static');
const map = require("./map")

// log request URL:
const main = static(path.join(__dirname));

app.use(main);
app.use(map);


app.listen(3000);
console.log('app started at port 3000...');