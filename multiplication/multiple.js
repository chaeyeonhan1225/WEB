function multiple(n){
    document.write("<div>");
    for(let i=1;i<=9;++i){
        document.write(`${n} x ${i} = ${n*i}<br>`);
    }
    document.write("</div>");
}

for(let i=2;i<=9;++i){
    multiple(i);
}