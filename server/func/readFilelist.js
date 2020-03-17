
const fs = require('fs');
const path = require('path');

function readFileList(dir, filesList = []) {
    const files = fs.readdirSync(dir);
    console.log(files);
    files.forEach((item, index) => {
        var fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {      
            readFileList(path.join(dir, item), filesList);  //递归读取文件
        } else {                
            filesList.push(fullPath);                     
        }        
    });
    return filesList;
}

module.exports = readFileList;
 
// var filesList = [];
// readFileList(__dirname,filesList);
