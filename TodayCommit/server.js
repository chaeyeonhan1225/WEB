const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.readFile(`./index.html`,(err,data)=>{
        if(err){
            console.log(`${req.url}`);
            throw err;
        }
        res.end(data);
        });
    }
    else{
        fs.readFile(`.${req.url}`,(err,data)=>{
            if(err){
                console.error(err);
                res.writeHead(404,'NOT FOUND');
                return res.end('NOT FOUND');
            }
            return res.end(data);
        });
    }
});

server.listen(8090);
server.on('listening',()=>{
    console.log('8090 포트에서 서버 대기 중');
});
server.on('error',(error)=>{
    console.error(error);
});