const b = require('./b.js');
console.log('a 开始');
exports.done = false;
console.log('在 a 中，b.done = %j', b.done);
exports.done = true;
console.log('a 结束');
