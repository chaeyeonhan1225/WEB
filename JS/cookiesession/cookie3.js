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


const session = {};
http.createServer((req,res)=>{
    const cookies = parseCookies(req.headers.cookie);
    // 쿠키는 req.headers에 있다.
    //console.log(url.parse(req.url));
    if(req.url.startsWith('/login')){
        const {query} = url.parse(req.url); 
        const {username,birthday} = qs.parse(query);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes()+5);
        const randomInt = Date.now();
        session[randomInt] = {
            username,
            birthday,
            expires,
        };
        res.writeHead(302,{
            Location:'/',
            'Set-Cookie':`session=${randomInt};Expires=${expires.toGMTString()}; HttpOnly; Path='/'`
        });
        res.end();
    }
    else if(cookies.session&&session[cookies.session].expires>new Date()){
        console.log('주소: ',url.parse(req.url));
        res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
        res.end(`${session[cookies.session].username}님 안녕하세요
        당신의 생일은 ${session[cookies.session].birthday}입니다.`);
    }
    else{
        fs.readFile('./login.html',(err,data)=>{
            if(err){
                throw err;
            }
            res.end(data);
        });
    }
}).listen(8082,()=>{
    console.log('8082번 포트에서 서버 대기 중입니다!');
});