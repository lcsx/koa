const Router = require('koa-router');
const router = new Router({prefix:'/users'});

router.get('/',(ctx)=>{
    ctx.body = 'users list'
})

router.get('/:id',(ctx)=>{
    ctx.body = `usersid:${ctx.params.id}`
})

router.post('/',(ctx)=>{
    ctx.body = `sss`
})

module.exports = router;  //导出实例

