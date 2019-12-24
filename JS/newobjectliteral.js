const sayNode = () =>{
    console.log("Node");
}
const es = "ES";
const newObject = {
    sayJS(){
        console.log("JS");
    },
    sayNode,
    [es+6] : "Fantastic",
}

newObject.sayJS();
newObject.sayNode();
console.log(newObject.ES6);