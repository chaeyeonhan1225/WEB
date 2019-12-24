function add(a,b,callback){
    let result = a+b;
    callback(result);
    let print = () => {
        console.log("result");
    }
    return print;
}

let add_result = add(1,5,function(result){
    console.log(result);
});
console.log(add_result());