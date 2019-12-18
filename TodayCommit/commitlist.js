let addBtn = document.querySelector("#addcontent");

let commitlist = document.querySelector("#commitlist");

function addlist(){
    let con = document.querySelector("#commitcontent").value;
    let newcommit = document.createElement("div");
    let contents = document.createTextNode(con);
    newcommit.appendChild(contents);
    newcommit.setAttribute("class","commitcon");
    addDeleteButton(newcommit);
    addWriteTime(newcommit);

    if(commitlist.hasChildNodes){
        commitlist.insertBefore(newcommit,commitlist.children[0]);
    }
    else{
        commitlist.appendChild(newcommit);
    }
    document.querySelector("#commitcontent").value = "";
   removecommit();
}
function addWriteTime(prNode){
    let uploadtime = document.createElement("span");
    let now = document.createTextNode(new Date().toLocaleString().slice(17));
    uploadtime.appendChild(now);
    uploadtime.setAttribute("class","showtime");
    prNode.appendChild(uploadtime);
}
function addDeleteButton(prNode){
    let Dbtn = document.createElement("span");
    let deleteText = document.createTextNode("X");
    Dbtn.appendChild(deleteText);
    Dbtn.setAttribute("class","delete");
    prNode.appendChild(Dbtn);
}
function removecommit(){
    let del = document.querySelectorAll(".delete");
    for(let i=0;i<del.length;++i){
        del[i].addEventListener("click",function(){
            if(this.parentNode.parentNode){
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        });
    }
}