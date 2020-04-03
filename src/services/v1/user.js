/**
 * Created by 汪凤杰 on 2018/6/24.
 */
import user from '../models/front/v1/user'
import nt_util from '../tool/nt_util'

exports.findByName = async (params) => {
  let result = await user.findByName(params.username);
  let data = {
    code: 0,
    data: result,
    msg: '请求成功！'
  };

  if(!result){
    data = {
      code: -1,
      data: [],
      msg: '用户名不存在！'
    };
    return data;
  }

  let pwd = nt_util.md5(params.password + result.salt);
  if(pwd != result.password){
    data = {
      code: -1,
      data: [],
      msg: '密码错误！'
    };
  }

  return data;
}

exports.update_pwd = async (params) => {
  let u = await user.findByUid(params.uid);

  let o_pwd = nt_util.md5(params.oldpassword + u.salt);
  if(o_pwd != u.password){
    data = {
      code: -1,
      data: [],
      msg: '原密码密码错误！'
    };
    return data;
  }

  let pwd = nt_util.md5(params.password + u.salt);
  let result = await user.update_pwd(params.uid, pwd);
  let data = {
    code: 0,
    data: result,
    msg: '请求成功！'
  };

  return data;
}

