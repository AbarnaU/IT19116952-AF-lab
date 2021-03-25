//cd Lab 5 - to change directory

//2
//npm i koa - install koa
//11 a
//npm install koa-bodyparser
const bodyParser = require('koa-bodyparser');
//6
//npm install @koa/router
const Router = require("@koa/router");

//10
const HomeRoutes = require('./routes/home.router');

//17
const PostRoutes = require('./routes/post.routes');
//3
const Koa = require('koa');
const router = require('koa-router');

//4
const app = new Koa();

//11 b
app.use(bodyParser());

//balance of 4
// app.use(ctx=>{
//     ctx.body = 'Hello World';
// });

app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods());

//17
app.use(PostRoutes.routes())
    .use(PostRoutes.allowedMethods());

app.listen(3000);

console.log("Application is running on port 3000");

