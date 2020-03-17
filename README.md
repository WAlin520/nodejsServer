# server for my-vue-project

## install dependencies
npm install

## serve with hot reload at localhost:8090
cd server
node index.js

###   简易的服务器

server文件夹内的index.js是服务器的入口

app文件夹下放置资源，index.html是默认页面文件，将my-vue-project项目构建成功后的dist文件夹下的文件放置进来即可。

功能：
1. express托管静态文件
2. 正则匹配前端路由（HTML5模式）
3. 轮播图的接口，返回的json包含了img属性是图片的src，同时对应app文件夹内的路径
4. 使用文件压缩






