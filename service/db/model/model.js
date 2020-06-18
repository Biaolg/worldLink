//模型集合

//导入模型
const Business = require(__basename + '/db/model/business.js');

//导入邮箱验证码模型, 记录邮箱验证码
const Code = require(__basename + '/db/model/code.js');

const Column = require(__basename + '/db/model/column.js');

module.exports = {
  Business,
  Code,
  Column
}