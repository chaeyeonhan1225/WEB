function addNode(salary,itemValue,itemattr){
    let mylist = document.querySelector(".list");
    const nitem = parseInt(salary/itemValue);
    let newL = document.createElement("li");
    let textL = document.createTextNode(`${nitem}${itemattr}`);
    newL.appendChild(textL);
    newL.setAttribute("class","smallpay");
    mylist.appendChild(newL);
}
function cupnoodle(salary){
    addNode(salary,600,"개의 컵라면을 먹을 수 있습니다.")
}

function movie(salary){
    addNode(salary,10000,"번 영화를 관람할 수 있습니다.")
}

function coffee(salary){
    addNode(salary,1500,"잔의 아메리카노를 마실 수 있습니다.");
}
function showsalary(){
    const salary = parseInt(document.querySelector("#mysalary").value);
    console.log(salary);
    if(salary){
    cupnoodle(salary);
    movie(salary);
    coffee(salary);
    }
    else{
        alert("값을 입력해주세요.");
    }
}
