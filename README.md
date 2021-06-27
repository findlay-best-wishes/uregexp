# uregexp
基于正则表达式的字符串匹配工具
## 用法
### 依赖安装
``` sh
npm install uregexp
```
### 按需引入所需函数
``` javascript
const {/*...*/} = require('uregexp');
```
## 功能
### 验证器
#### 用户名验证
字符长度大于等于5，以英文字母开头，后续部分可包含字母数字及下划线
##### 示例
``` javascript
const {validator_Username} = require('uregexp');
validator_Username("findlay19");    // => true
validator_Username("19findlay");     // => false
```
#### 密码验证
密码长度为6到25位，包含数字、字母及标点符号，至少包含2种类型
##### 示例
``` javascript
const {validator_Password} = require('uregexp');
validator_Password("ezforcoding+-");    // => true
validator_Password("ezforcodingez");     // => false
```
#### 邮箱验证
包含由@和·分割而成的三部分非空字符
##### 示例
``` javascript
const {validator_EmailAdr} = require('uregexp');
validator_EmailAdr("gj508299098@163.com");    // => true
validator_EmailAdr("ezzzz@23242");     // => false
```
#### 移动电话号码验证
11位数字，以1开头。
##### 示例
``` javascript
const {validator_MpNum} = require('uregexp');
validator_MpNum("152300902342342");    // => false
validator_MpNum("12829902745");     // => true
```
### 数据匹配
#### url解析器
可从Http链接中解析出协议、主机名、路径、参数和哈希值。
##### 示例
``` javascript
const {parser_url} = require('uregexp');
parser_url("http://guojie.fun/javascript/express?key1=v1&key2=v2#hashval");
```
上述url解析结果为：
``` javascript
{
    protocol: 'http',
    hostname: 'guojie.fun',
    pathname: '/javascript/express',
    query: {
        key1: 'v1',
        key2: 'v2'
    },
    hash: 'hashval'
}
```
