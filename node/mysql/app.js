//调用MySQL模块
var mysql = require('mysql');

//创建一个connection
var connection = mysql.createConnection({
  host: 'localhost', //主机
  user: 'root', //MySQL认证用户名
  password: 'lm0909', //MySQL认证用户密码
  port: '3306', //端口号
  database: 'nodesample'
});
connection.connect();

// var userAddSql = 'insert into userinfo(Id,UserName,UserPass) values(0,?,?)'
// var userAddSql_Params = ['ming', '123'];
//增增加一条数据
// connection.query(userAddSql, userAddSql_Params, function(err, result) {
//   if (err) {
//     console.log('[INSERT ERROR] - ', err.message);
//     return;
//   } else {
//     console.log('插入数据成功');
//   }
// });

//更新一条数据
// var userModSql = 'update userinfo set UserName = ?,UserPass = ? WHERE Id = ?';
// var userModSql_Params = ['xiaoming', '5678', 3];
// connection.query(userModSql, userModSql_Params, function(err, result) {
//   if (err) {
//     console.log('[UPDATE ERROR] - ', err.message);
//     return;
//   } else {
//     console.log('UPDATE affectedRows', result);
//   }
// });
//
// //查
// var userGetSql = 'SELECT * FROM userinfo';
// connection.query(userGetSql, function(err, result) {
//   if (err) {
//     console.log('[SELECT ERROR] - ', err.message);
//     return;
//   } else {
//     console.log(result);
//   }
//
// });


connection.end();
