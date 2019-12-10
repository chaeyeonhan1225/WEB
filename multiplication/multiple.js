function multiple(n){
    for(let i=1;i<=9;++i){
        document.write(`${n} x ${i} = ${n*i} `);
        if(i%3==0)
            document.write("<br>");
    }
}

for(let i=2;i<=9;++i){
    multiple(i);
}