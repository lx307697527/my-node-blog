const fs = require("fs");
module.exports = async function (ctx) {
    ctx.response.type = 'html';
    switch (ctx.request.path) {
        case '/':
            ctx.response.type = 'html';
            ctx.response.body = await  fs.ReadStream("./pages/index.html")
            break;
        case '/index':
            ctx.response.type = 'html';
            ctx.response.body = await  fs.ReadStream("./pages/index.html")
            break;
        case '/my/index':
            ctx.response.type = 'html';
            ctx.response.body = await  fs.ReadStream("./pages/my/index.html")
            break;
        case '/hello':
            ctx.response.type = 'html';
            ctx.response.body = await  fs.ReadStream("./pages/hello.html")
            break;

        default: 
            ctx.response.body = await  fs.ReadStream("./pages/404.html")
            break;
    }
}