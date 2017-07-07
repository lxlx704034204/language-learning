// 应用程序的入口文件
let express = require('express');
let swig = require('swig');
let mysql = require('mysql');
let bodyParser = require('body-parser');
var app = express();

app.use('/public',express.static(__dirname + '/public'));
app.engine('html',swig.renderFile);
app.set('views','./views');
app.set('view engine','html');
swig.setDefaults({cache:false});
app.use(bodyParser.urlencoded({extended:true}));

app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));

var connection = mysql.createConnection({
  host: 'localhost', //主机
  user: 'root', //MySQL认证用户名
  password: 'lm0909', //MySQL认证用户密码
  port: '3306', //端口号
  database: 'nodesample'
});
connection.connect();
app.listen(8081);
connection.end();
