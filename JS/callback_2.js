const add = (a,b,callback) => {
    callback(a,b);
} 

add(1,2,(a,b)=>console.log(a+b));
add(1,3,(a,b)=>console.log('콜백 함수 실행'));

