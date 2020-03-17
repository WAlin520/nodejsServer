const express = require('express');
const path = require('path');
const app = express();
// 在 app 文件夹开启静态服务
app.use(express.static('../app'));

//允许跨域
var allowCrossDomain = function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  next();
}
app.use(allowCrossDomain);

//压缩文件
var compression = require('compression');
app.use(compression());

app.get('/api/getlunbo',function(req, res){
    res.send({
            message: [
              {
                id: 1,
                img: 'http://122.51.205.63:8090/imgResource/tiantian.jpg'
                // img: 'http://localhost:8090/imgResource/tiantian.jpg'
              },
              {
                id: 2,
                img: 'http://122.51.205.63:8090/imgResource/minmin1.jpg'
                // img: 'http://localhost:8090/imgResource/minmin1.jpg'
              },
              {
                id: 3,
                img: 'http://122.51.205.63:8090/imgResource/minmin2.jpg'
                // img: 'http://localhost:8090/imgResource/minmin2.jpg'
              }
            ],
            status: 0
        }
    );
})

//正则匹配 前端history模式路由
const routerExp = /^\/home|search|cart|member/;
app.get(routerExp, (req, res) => {
  //window系统
  return res.sendFile(path.resolve('/html_node/node_server_project/app/index.html'));
  // linux系统
  //return res.sendFile(path.resolve('../app/index.html'));
});
// app.get(routerExp, (req, res) => res.sendFile('F:\html_node\node_server_project\app\index.html'));

app.listen(8090, () => {
  console.log('Demo server listening on port 8090');
});
