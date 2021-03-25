//7
const Router = require('@koa/router');

//8
const router = new Router({
    prefix: '/home'
});

router.get('/', ctx => {
    ctx.body = 'Hello World';
});

router.post('/', ctx =>{
    ctx.body = "Welcome";
});

//9
module.exports = router;
