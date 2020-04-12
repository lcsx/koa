const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser'); 
app.use(bodyparser());
const routing = require('./routes')

routing(app) 

app.listen(3000)