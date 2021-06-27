const { isString } = require('./common');

//移动电话号码检测
//11位数字，以1开头
function validator_MpNum(arg) {
  isString(arg);
  return arg.search(/^1\d{10}$/) > -1 ? true : false;
}

//电子邮箱地址检测
//包含由@和·分割而成的三部分非空字符
function validator_EmailAdr(arg) {
  isString(arg);
  return arg.search(/^\S+@\S+\.\S+$/) > -1 ? true : false;
}

//用户名检测
//字符长度大于等于5，以英文字母开头，后续部分可包含字母数字及下划线
function validator_Username(arg) {
  isString(arg);
  return arg.search(/^[a-zA-Z][\w]{5,}$/) > -1 ? true : false;
}

//密码检测
//密码长度为6到25位，包含数字、字母及标点符号，至少包含2种类型
function validator_Password(arg) {
  isString(arg);
  if (arg.search(/^[\u0021-\u007E]{6,25}$/) > -1) {
    let types = 0;
    if (arg.search(/[\u0030-\u0039]/) > -1) types++;
    if (arg.search(/[\u0041-\u005A\u0061-\u007A]/) > -1) types++;
    if (
      arg.search(/[\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E]/) > -1
    )
      types++;
    return types > 1;
  } else return false;
}

module.exports = {
  validator_MpNum,
  validator_EmailAdr,
  validator_Username,
  validator_Password
};
