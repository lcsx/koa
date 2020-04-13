const Router = require('koa-router');
const router = new Router({prefix:'/home'});

const {index,add} = require('../controllers/home');

router.get('/',index);

router.post('/add',add);

module.exports = router;  //导出实例

