const express = require('express');
const path = require('path');
const fs = require('fs');
var url = require("url");
const os = require("os");
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

//正则匹配 前端history模式路由
const routerExp = /^\/home|search|cart|member/;
app.get(routerExp, (req, res) => {
  //window系统
  // return res.sendFile(path.resolve('/html_node/node_server_project/app/index.html'));
  // linux系统
  return res.sendFile(path.resolve('../app/index.html'));
});

//读取图片
//根据当前操作系统选择文件夹
var resourceDir = '', rootURL = '';
var platform = os.platform();
console.log(platform);
if(platform.match(/^[win]/)){
  resourceDir = '/html_node/node_server_project/app';
  rootURL = 'http://127.0.0.1:8090';
}else if(platform == 'linux'){
  resourceDir = '../app';
  rootURL = 'http://122.51.205.63:8090'
}else{
  throw err;
}
var imgLunbotuDir = 'imgResource'; //图片文件夹
function getImgUrl(rootdir, imgdir){
  var dirpath = path.resolve(rootdir, imgdir);
  var dirpath_parse = path.parse(dirpath);
  const fileslist = fs.readdirSync(dirpath);
  // console.log(fileslist);
  return fileslist.map((file, i)=>({
    id: i,
    img: `${rootURL}/${imgdir}/${file}`
  }))
}

app.get('/api/getlunbo',function(req, res){
  console.log(req.connection.remoteAddress)
  res.send({
          message: getImgUrl(resourceDir, imgLunbotuDir),
          status: 0
      }
  );
})



app.listen(8090, () => {
  console.log('Demo server listening on port 8090--');
});
