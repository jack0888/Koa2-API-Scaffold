/**
 * Created by 汪凤杰 on 2018/6/22.
 */
import user from '../../services/v1/user'
import nt_util from '../../tool/nt_util'

// 登录
export let login = async (ctx) => {

  //let _params = ctx.request.body.fields;
  let _params = ctx.request.body;
  //nt_util.log(user);
  //nt_util.log(nt_util.md5('123456'));// e10adc3949ba59abbe56e057f20f883e

  if(!_params.username || !_params.password){
    ctx.body = {
      code: -1,
      data:[],
      msg:'缺少参数！'
    };
    return;
  }

  let result = await user.findByName(_params);

  ctx.body = result;

  // ps: TODO ctx.body = {} 后面可以写一个公共返回方法 ，包含 code 统一编码处理、msg 处理，data 数据类型处理，建议放到 nt_util 中

}

// 修改密码
export let update_pwd = async (ctx) => {

  let _params = ctx.request.body;

  if(!_params.uid || !_params.password || !_params.oldpassword){
    ctx.body = {
      code: -1,
      data:[],
      msg:'缺少参数！'
    };
    return;
  }

  let result = await user.update_pwd(_params);

  ctx.body = result;

}



