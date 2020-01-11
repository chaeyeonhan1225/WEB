const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie='') =>
    cookie 
        .split(';')
        .map(v=>v.split('='))
        .map(([k,...vs])=>[k,vs.join('=')])
        .reduce((acc,[k,v])=>{
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        },{});

http.createServer((req,res)=>{
    const cookies = parseCookies(req.headers.cookie);
    // 쿠키는 req.headers에 있다.
    //console.log(url.parse(req.url));
    if(req.url.startsWith('/login')){
        const {query} = url.parse(req.url); 
        const {username} = qs.parse(query);
        const {birthday} = qs.parse(query);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes()+5);
        res.writeHead(302,{
            Location:'/',
            'Set-Cookie':`userinfo=${encodeURIComponent(username)}&${birthday};Expires=${expires.toGMTString()}; HttpOnly; Path='/'`
        });
      
        res.end();
        console.log('login주소: ',url.parse(req.url));
        console.log(qs.parse(query));
    }
    else if(cookies.userinfo){
        console.log('주소: ',url.parse(req.url));
        res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
        const username = cookies.userinfo.split('&')[0];
        const birthday = cookies.userinfo.split('&')[1];
        res.end(`${username}님 안녕하세요 생일은 ${birthday}`);
    }
    else{
        fs.readFile('./login.html',(err,data)=>{
            if(err){
                throw err;
            }
            res.end(data);
        });
    }
    //res.end('Hello Cookie!');
}).listen(8082);