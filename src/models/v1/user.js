// user.js

import Sequelize from 'sequelize'
import sequelize from '../../lib/sequelize.js'

// 筛选条件
// const Op = Sequelize.Op;
// where.field = {
//   [Op.gte]: create_time,
//   [Op.lt]: create_time
// }

// 创建 model
var User = sequelize.define('nt_users', {
    // 映射配置里没有指定主键列，如果没有指定主键列，会自动增加id列的映射。
    uid: {
       type: Sequelize.INTEGER,
       primaryKey: true,
    },
    username: {
        type: Sequelize.STRING, // 指定值的类型
        field: 'username' // 指定存储在表中的键名称
    },
    // 没有指定 field，表中键名称则与对象键名相同
    password: {
        type: Sequelize.TINYINT
    },
    salt: {
      type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.BIGINT,
        field: 'create_time'
    },
    updatedAt: {
        type: Sequelize.BIGINT,
        field: 'update_time'
    }
}, {
    // 如果为 true 则表的名称和 model 相同，即 user
    // 为 false MySQL 创建的表名称会是复数 users
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: false,
    autoIncrement: true,// 返回自增id
    'timestamps': false, // 设置字段不返回
    "createdAt":false,
    "updatedAt":false,
    "deletedAt":false,
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
        //外键关系model
      }
    }
});

// 创建表
// User.sync() 会创建表并且返回一个Promise对象
// 如果 force = true 则会把存在的表（如果users表已存在）先销毁再创建表
// 默认情况下 force = false
// var user = User.sync({ force: false });// 暂不主动创建表

// 添加新用户
exports.addUser = function(username, password, salt) {
    // 向 user 表中插入数据
    return User.create({
      username: username,
      password: password,
      salt:salt
    });
};

// 通过用户名查找用户
exports.findByName = function(username) {
    return User.findOne({ where: { username: username } });
};

// 通过用户id查找用户
exports.findByUid = function(uid) {
  return User.findOne({ where: { uid: uid } });
};

// 修改密码
exports.update_pwd = function(uid,password){
  var pram={'password':password};
  return User.update(pram,{'where':{'uid':uid}});
}

