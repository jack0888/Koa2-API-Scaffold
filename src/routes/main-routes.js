import KoaRouter from 'koa-router'
import controllers from '../controllers'

const v1 = controllers.v1; // v1 api

const router = new KoaRouter()

export default router
  .get('/public/get', function (ctx, next) {
    ctx.body = '禁止访问！'
  }) // 以/public开头则不经过权限认证
  .all('/upload', controllers.upload)
  .get('/public/api/:name', controllers.api.Get)
  .post('/api/:name', controllers.api.Post)
  .put('/api/:name', controllers.api.Put)
  .del('/api/:name', controllers.api.Delete)
  .post('/auth/:action', controllers.auth.Post)

  /*
  * v1 api 路由配置
  * add by jack on 20180610
  */
  .post('/v1/user', v1.user.login)
  .post('/v1/user_update', v1.user.update_pwd)
