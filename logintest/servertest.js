const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req,res)=>{
    fs.readFile('./testServer.html',(err,data)=>{
        if(err){
            throw err;
        }
        res.end(data);
    });
}).listen(8080,()=>{
    console.log("8080포트에서 서버 대기 중");
});