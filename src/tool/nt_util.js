var crypto = require('crypto');

let log = (data,_name) => {
	_name = _name || 'data';
  console.log('==========='+_name+'===========start');
  console.log(data);
  console.log('==========='+_name+'===========end');
}


function md5 (text) {
  return crypto.createHash('md5').update(text).digest('hex');
};

let newGUID = function(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}

// 时间戳转时间 显示年月日时分秒
function timestampToTime(timestamp) {
  //var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  let D = (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate()) + ' ';
  let h = (date.getHours() < 10 ? '0'+(date.getHours()) : date.getHours()) + ':';
  let m = (date.getMinutes() < 10 ? '0'+(date.getMinutes()) : date.getMinutes()) + ':';
  let s = (date.getSeconds() < 10 ? '0'+(date.getSeconds()) : date.getSeconds());
  return Y+M+D+h+m+s;
}

function timeFormat(date) {
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  let D = (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate()) + ' ';
  let h = (date.getHours() < 10 ? '0'+(date.getHours()) : date.getHours()) + ':';
  let m = (date.getMinutes() < 10 ? '0'+(date.getMinutes()) : date.getMinutes()) + ':';
  let s = (date.getSeconds() < 10 ? '0'+(date.getSeconds()) : date.getSeconds());
  return Y+M+D+h+m+s;
}

// 时间戳转时间
function timestampToTime2(timestamp) {
  var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  let D = (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate()) + ' ';
  let h = (date.getHours() < 10 ? '0'+(date.getHours()) : date.getHours()) + ':';
  let m = (date.getMinutes() < 10 ? '0'+(date.getMinutes()) : date.getMinutes());
  return M+D+h+m;
}

// 日期格式转换成时间戳
function timeToTimestamp(strtime) {
  let date = new Date(strtime.replace(/-/g, '/'));
  let time = Date.parse(date)/1000;
  return time;
//  var strtime = '2014-04-23 18:55:49:123';
//  var date = new Date(strtime);
////传入一个时间格式，如果不传入就是获取现在的时间了，这样做不兼容火狐。
//// 可以这样做
//  var date = new Date(strtime.replace(/-/g, '/'));
//
//// 有三种方式获取，在后面会讲到三种方式的区别
//  time1 = date.getTime();
//  time2 = date.valueOf();
//  time3 = Date.parse(date);

  /*
   三种获取的区别：
   第一、第二种：会精确到毫秒
   第三种：只能精确到秒，毫秒将用0来代替
   比如上面代码输出的结果(一眼就能看出区别)：
   1398250549123
   1398250549123
   1398250549000
   */
}


module.exports = {
	log: log,
  md5: md5,
  newGUID: newGUID,
  timestampToTime: timestampToTime,
  timestampToTime2: timestampToTime2,
  timeToTimestamp: timeToTimestamp,
  timeFormat: timeFormat
}
