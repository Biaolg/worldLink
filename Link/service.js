global.__basename = __dirname;

//导入express, 搭建web服务器
const express = require('express');

//导入ejs, 渲染模板（html）
const ejs = require('ejs');

//导入path, 用于处理路径
const path = require('path');

//创建express实例
let app = express();

//设置静态目录
app.use(express.static(__basename + '/public'));

//设置模板渲染
app.set('views', path.resolve(__dirname, 'views'))

//设置模板引擎类型
app.set('view engine', 'html');

app.engine('.html', ejs.__express);

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(9000, () => {
    // console.log('the server running at http://47.106.85.2:10000');
})